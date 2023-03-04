from ndn.encoding import Name
from ndn.types import Interest

# Create an NDN name from a URI string
name = Name.from_str('/edu/ucla/cs/135/notes')

# Create an Interest packet with this name
interest = Interest(name)

# Set the Interest packet's InterestLifetime to 4 seconds (default)
interest.interest_lifetime = 4000
