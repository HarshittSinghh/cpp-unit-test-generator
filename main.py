import os
import subprocess

PROMPT_TEMPLATE = "prompt.txt"
PROMPT_FOLDER = "prompts/"
SRC_FILE = "../models/Job.cc"
OUT_FILE = "tests/test_Job.cc"

def run_ollama(prompt):
    process = subprocess.Popen(
        ["ollama", "run", "codellama:7b"],
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )
    stdout, stderr = process.communicate(input=prompt)
    if stderr:
        print("⚠️ Ollama stderr:", stderr)
    return stdout

def load_all_yaml_files(folder):
    yaml_contents = ""
    for filename in sorted(os.listdir(folder)):
        if filename.startswith('.') or not (filename.endswith(".yaml") or filename.endswith(".yml")):
            continue
        with open(os.path.join(folder, filename), "r") as file:
            yaml_contents += f"# {filename}\n"
            yaml_contents += file.read() + "\n\n"
    return yaml_contents.strip()

def main():
    if not os.path.exists(SRC_FILE):
        raise FileNotFoundError(f"❌ Source file not found: {SRC_FILE}")
    if not os.path.exists(PROMPT_TEMPLATE):
        raise FileNotFoundError(f"❌ Prompt template not found: {PROMPT_TEMPLATE}")

    yaml_instructions = load_all_yaml_files(PROMPT_FOLDER)

    with open(SRC_FILE, "r") as src:
        code = src.read()

    with open(PROMPT_TEMPLATE, "r") as prompt_file:
        base_prompt = prompt_file.read()

    prompt = base_prompt.replace("{YAML_INSTRUCTIONS}", yaml_instructions).replace("{CODE_HERE}", code)

    test_output = run_ollama(prompt)

    os.makedirs(os.path.dirname(OUT_FILE), exist_ok=True)
    with open(OUT_FILE, "w") as out:
        out.write(test_output.strip())

    print("\n🧪 Generated Unit Test:\n")
    print(test_output)
    print(f"\n✅ Unit tests saved to {OUT_FILE}")

if __name__ == "__main__":
    main()
