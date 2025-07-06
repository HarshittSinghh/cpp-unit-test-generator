cmake_minimum_required(VERSION 3.10)
project(cpp_test_generator)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)


include_directories(${CMAKE_SOURCE_DIR}/models)
include_directories(${CMAKE_SOURCE_DIR}/<use your path>)  # Update this path if needed


include(FetchContent)
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/release-1.12.1.zip
)
FetchContent_MakeAvailable(googletest)

enable_testing()

set(MODELS_DIR ${CMAKE_SOURCE_DIR}/models)
set(TESTS_DIR ${CMAKE_SOURCE_DIR}/tests)

add_executable(job_test
  ${MODELS_DIR}/Job.cc
  ${TESTS_DIR}/test_Job.cc
)

target_link_libraries(job_test
  gtest_main
)

include(GoogleTest)
gtest_discover_tests(job_test)
