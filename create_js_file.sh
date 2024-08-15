# Prompt the user for a sentence
read -p "Please enter the sentence: " sentence

# Convert the input sentence to lowercase, replace spaces with underscores
filename=$(echo "$sentence" | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g')

# Create the file with .js extension
touch "javascript/${filename}.js"

# Inform the user
echo "Created file: ${filename}.js"