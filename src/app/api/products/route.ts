import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch the product data from the public directory
    const response = await fetch('https://furniture-marketplace-api.vercel.app/api/products');
    
    if (!response.ok) {
      throw new Error('Failed to fetch product data');
    }

    // Parse the JSON data
    const products = await response.json();

    // Return the products as a JSON response
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error reading product data:', error);
    return NextResponse.json({ message: 'Error reading product data' }, { status: 500 });
  }
}
