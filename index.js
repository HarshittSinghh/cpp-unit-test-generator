const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const PROMPT_TEMPLATE = 'prompt.txt';
const PROMPT_FOLDER = 'prompts/';
const SRC_FILE = '../models/Job.cc';
const OUT_FILE = 'tests/test_Job.cc';

function runOllama(prompt) {
  const result = spawnSync('ollama', ['run', 'codellama:7b'], {
    input: prompt,
    encoding: 'utf-8',
  });

  if (result.error) {
    console.error('❌ Failed to run Ollama:', result.error);
    process.exit(1);
  }

  if (result.stderr) {
    console.warn('⚠️ Ollama stderr:', result.stderr);
  }

  return result.stdout;
}

function loadAllYamlFiles(folder) {
  if (!fs.existsSync(folder)) {
    console.error(`❌ Prompts folder not found: ${folder}`);
    process.exit(1);
  }

  const files = fs.readdirSync(folder).filter(file =>
    (file.endsWith('.yaml') || file.endsWith('.yml')) && !file.startsWith('.')
  );

  let yamlContents = '';

  for (const file of files.sort()) {
    const filePath = path.join(folder, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    yamlContents += `# ${file}\n${content}\n\n`;
  }

  return yamlContents.trim();
}

function main() {
  if (!fs.existsSync(SRC_FILE)) {
    console.error(`❌ Source file not found: ${SRC_FILE}`);
    process.exit(1);
  }

  if (!fs.existsSync(PROMPT_TEMPLATE)) {
    console.error(`❌ Prompt template not found: ${PROMPT_TEMPLATE}`);
    process.exit(1);
  }

  const yamlInstructions = loadAllYamlFiles(PROMPT_FOLDER);
  const code = fs.readFileSync(SRC_FILE, 'utf-8');
  const basePrompt = fs.readFileSync(PROMPT_TEMPLATE, 'utf-8');

  const prompt = basePrompt
    .replace('{YAML_INSTRUCTIONS}', yamlInstructions)
    .replace('{CODE_HERE}', code);

  const testOutput = runOllama(prompt);

  const outDir = path.dirname(OUT_FILE);
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(OUT_FILE, testOutput.trim(), 'utf-8');

  console.log('\n🧪 Generated Unit Test:\n');
  console.log(testOutput);
  console.log(`\n✅ Unit tests saved to ${OUT_FILE}`);
}

main();
