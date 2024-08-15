#!/bin/bash

while true; do
    # Prompt the user for a sentence
    read -p "Please enter the filename: " input

    # Convert the input filename to lowercase, replace spaces with underscores
    filename=$(echo "$input" | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g')

    # Create the file with .js extension
    touch "${filename}.js"

    # Inform the user
    echo "Created file: javascript/${filename}.js"

    # Ask the user if they want to create another file
    read -p "Do you want to create another file? (y/n): " choice

    # Check the user's choice
    if [[ "$choice" != "y" && "$choice" != "Y" ]]; then
        echo "Exiting..."
        break
    fi
done