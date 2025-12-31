#!/bin/bash
piseth_book=("C Programming","Network","C++ Programming");
echo $piseth_book
echo "========== Piseth Book Stores ==========";
for books in "${piseth_book[@]}";
do
    echo "Books is: $books";
done