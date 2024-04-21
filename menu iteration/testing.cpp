#include <iostream>
#include <string>
#include <regex>

int main() {
    std::string input;
    std::cout << "Enter HTML code (type 'quit' to exit):\n";

    while (true) {
        // Get HTML input
        std::getline(std::cin, input);

        // Check for exit condition
        if (input == "quit") {
            break;
        }

        // Regular expression pattern to match content between <p> and </p> tags
        std::regex pattern("<p>(.*?)</p>");

        // Define an iterator to iterate over matches
        std::sregex_iterator iterator(input.begin(), input.end(), pattern);
        std::sregex_iterator endIterator;

        // Output content between <p> and </p> tags
        while (iterator != endIterator) {
            std::cout << "Found content: " << iterator->str(1) << std::endl;
            ++iterator;
        }
    }

    return 0;
}
