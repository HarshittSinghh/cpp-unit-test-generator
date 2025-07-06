## 🧪 Test Coverage & Limitations

- Unit tests were generated automatically using a self-hosted LLM (CodeLlama:7B) via Ollama.
- Due to limited access to Drogon framework (network issues while downloading via vcpkg), all Drogon-specific code (e.g., `drogon/orm/Result.h`) was commented out.
- The unit tests focus on the non-Drogon logic within `Job.cc`, ensuring that core data logic and methods are testable.
- Google Test was used for test framework setup.
- The generator script refines tests based on YAML instructions and removes redundancy.
- Test files build successfully (excluding Drogon parts), demonstrating the core functionality of the unit test generator.

> When Drogon is available, simply uncomment the relevant includes and extend tests to cover database interactions.
