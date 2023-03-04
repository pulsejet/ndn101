#include <ndn-cxx/face.hpp>

int main(int argc, char** argv)
{
    // Create an NDN Name from a URI string
    ndn::Name name("/edu/ucla/cs/135/notes");

    // Create an Interest packet with this name
    ndn::Interest interest(name);

    // Set the Interest packet's InterestLifetime to 4 seconds (default)
    interest.setInterestLifetime(ndn::time::seconds(4));

    // Create a Data packet with the same name
    ndn::Data data(name);

    // Set the Data packet's content to "Hello, World!"
    data.setContent(reinterpret_cast<const uint8_t*>("Hello, World!"), 13);
}