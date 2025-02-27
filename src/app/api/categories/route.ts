import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch the categories data from the public/data folder
    const response = await fetch('https://furniture-marketplace-api.vercel.app/data/categories.json');
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories data');
    }

    // Parse the JSON data
    const categories = await response.json();

    // Return the categories as a JSON response
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error reading category data:', error);
    return NextResponse.json({ message: 'Error reading category data' }, { status: 500 });
  }
}
