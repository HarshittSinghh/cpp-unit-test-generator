# Org Chart API

A **RESTful API** built with [Drogon](https://github.com/drogonframework/drogon), a high-performance C++ framework. This API is designed to manage organizational structures, including persons, departments, and job roles.

## 🚀 Features

- CRUD operations for organizational entities
- Efficient routing and ORM via Drogon
- Structured project organization
- Unit testing with Google Test
- JSON-based input/output
- Easily extendable schema for future components

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
