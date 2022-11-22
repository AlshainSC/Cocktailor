export interface Cocktail  {
  name: string;
  image_path: string;
  spirits: string[];
  dominant_flavours: string[];
  type: string;
  flavour_notes: string[];
  preparation: string;
  recipe: Recipe;
  glass: string;
  description: string;
}

interface Recipe {
  sour: string;
    sweet: string;
    strong: string;
    weak: string;
    garnish: string;
}


