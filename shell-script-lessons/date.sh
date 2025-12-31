#!/bin/bash
echo "What day is today? $(date)";
echo "What day is today? $(date '+%F@%T')";
echo "What is the date? $(date '+%d-%m-%Y')";
echo "What time is it? $(date '+%H:%M:%S')";
echo "Day & Month $(date '+%a-%A & %b-%B')";