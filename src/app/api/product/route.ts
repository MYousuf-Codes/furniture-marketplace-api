import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to the products JSON file
const productsFilePath = path.join(process.cwd(), 'data', 'products.json');

export async function GET() {
  try {
    // Read the product data from the JSON file
    const data = await fs.promises.readFile(productsFilePath, 'utf8');
    
    // Parse the JSON data
    const products = JSON.parse(data);
    
    // Return the products as a JSON response
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error reading product data:', error);
    return NextResponse.json({ message: 'Error reading product data' }, { status: 500 });
  }
}
