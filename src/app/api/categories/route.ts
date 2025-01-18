import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to the categories JSON file
const categoriesFilePath = path.join(process.cwd(), 'data', 'categories.json');

export async function GET() {
  try {
    // Read the categories data from the JSON file
    const data = await fs.promises.readFile(categoriesFilePath, 'utf8');
    
    // Parse the JSON data
    const categories = JSON.parse(data);
    
    // Return the categories as a JSON response
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error reading category data:', error);
    return NextResponse.json({ message: 'Error reading category data' }, { status: 500 });
  }
}
