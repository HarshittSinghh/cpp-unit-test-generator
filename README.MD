# 🚀 C++ Unit Test Generator with Ollama & CodeLlama

A powerful and intelligent **Unit Test Generator** that automatically creates, refines, and improves unit tests for your C++ projects using AI models like **CodeLlama:7B** via **Ollama**. Built with ❤️ for C++ devs, this tool leverages prompt engineering and YAML-driven workflows to provide test coverage and debugging assistance.

## 🔧 Core Features

✅ Generate unit tests from C++ source files (e.g., `Job.cc`)  
✅ Uses **YAML-based** instructions to guide the AI model  
✅ Iteratively refines tests: removes duplicates, fixes structure  
✅ Google Test–compatible output  
✅ Automatically handles build failures via feedback loops  
✅ Works via both **Python** and **Node.js** scripts  
✅ Output saved in the `tests/` directory

---
## Folder Structure
```
cpp-test-generator/
├── prompts/ 
│ ├── basic_generation.yaml
│ ├── refine_tests.yaml 
│ ├── build_error_fix.yaml 
│ ├── improve_coverage.yaml 
│ └── format_and_cleanup.yaml 
│
├── tests/ 
│ └── test_Job.cc 
│
├── prompt.txt 
├── models/ 
│ └── Job.cc 
│
├── index.js and main.py
├── CMakeLists.txt 
└── README.md      
```
---

## 🧠 How to Run the Unit Test Generator

### ✅ Prerequisites
Make sure [Ollama](https://ollama.com) is installed and running with the required model:
```bash
ollama pull codellama:7b
```
### Generating Unit Test using LLM
``` bash
node index.js  # if using JS
# or
python main.py # if using python
```
### 📂 Output
Generated unit tests will be saved in:

```bash
tests/test_Job.cc
```
---

## ⚙️ Build & Run C++ Tests (Google Test + CMake)

### 🔨 1. Install Drogon via vcpkg

Make sure you have Git, CMake, and a C++17-compatible compiler installed. Then run:

```bash
git clone https://github.com/microsoft/vcpkg
cd vcpkg
./bootstrap-vcpkg.bat   # Windows
# or
./bootstrap-vcpkg.sh    # Linux/macOS

./vcpkg install drogon


## 🧪 Unit Testing
Unit tests are written using Google Test.

```bash

cd cpp-test-generator
mkdir build && cd build
cmake .. -DCMAKE_TOOLCHAIN_FILE=../../vcpkg/scripts/buildsystems/vcpkg.cmake
cmake --build .

```

## Run Test
```bash
ctest --verbose
Or run test binary directly:
./job_test

```

### Author: Harshit Kumar Singh
