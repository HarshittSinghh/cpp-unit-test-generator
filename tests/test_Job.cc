
#include <gtest/gtest.h>
#include "./models/Person.h"
#include "./models/Job.h"

TEST(Person, Constructor) {
    Person person("Alice", 25);
    EXPECT_EQ(person.name(), "Alice");
    EXPECT_EQ(person.age(), 25);
}

TEST(Person, SetName) {
    Person person;
    person.set_name("Bob");
    EXPECT_EQ(person.name(), "Bob");
}

TEST(Person, SetAge) {
    Person person;
    person.set_age(30);
    EXPECT_EQ(person.age(), 30);
}

TEST(Job, Constructor) {
    Job job("Software Engineer", "Company A");
    EXPECT_EQ(job.title(), "Software Engineer");
    EXPECT_EQ(job.company(), "Company A");
}

TEST(Job, SetTitle) {
    Job job;
    job.set_title("Data Scientist");
    EXPECT_EQ(job.title(), "Data Scientist");
}

TEST(Job, SetCompany) {
    Job job;
    job.set_company("Company B");
    EXPECT_EQ(job.company(), "Company B");
}

TEST(Person, GetPersons) {
    DbClientPtr client = /* create a database client here */;
    auto rcb = [](std::vector<Person> persons) {
        // check the results here
        EXPECT_EQ(persons.size(), 2);
        EXPECT_EQ(persons[0].name(), "Alice");
        EXPECT_EQ(persons[1].name(), "Bob");
    };
    auto ecb = [](const std::exception_ptr &e) {
        // check the exception here
        EXPECT_TRUE(false);
    };
    Job job("Software Engineer", "Company A");
    job.getPersons(client, rcb, ecb);
}
