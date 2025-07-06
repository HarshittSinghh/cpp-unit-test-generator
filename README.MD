## C++ Unit Test Generator with Ollama & CodeLlama
This project includes an AI-powered Unit Test Generator that automatically creates and refines unit tests for your C++ application — using Ollama and the CodeLlama:7B model. It integrates prompt engineering and YAML-based instruction refinement for test generation, debugging, and build validation.

Core Features
 - Reads C++ source files (like Job.cc) and generates unit tests with AI.
 - Uses YAML-based strict instruction prompts to guide the LLM.
 - Iteratively refines test cases to remove duplicates and improve structure.
 - Unit tests generated in Google Test format.
 - Supports build + test cycle with feedback loops on build failures.
 - Output test files stored in tests/ directory.

---


---

## ⚙️ Build Instructions

### 1. Install Drogon

Follow [Drogon's installation guide](https://github.com/drogonframework/drogon#build-and-install) or install via `vcpkg`:

```bash
git clone https://github.com/microsoft/vcpkg
cd vcpkg
./bootstrap-vcpkg.bat
./vcpkg install drogon
```

#🧪 Unit Testing
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
