#!/bin/bash
cd frontend
npm i
npm run build
cd ..
go run main.go