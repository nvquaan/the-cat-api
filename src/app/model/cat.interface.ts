export interface ICat {
    breeds: IBreed[];
    id: string;
    url: string;
    width: number;
    height: number;

}

export interface IBreed {
  id: string;
  name: string;
  temperament: string;
  life_span: string;
  alt_names: string;
  wikipedia_url: string;
  origin: string;
  weight_imperial: string;
}

export interface ICategory{
    id: number;
    name: string;
}

export interface IBreeds{
    breeds: IBreed[];
    height: number;
    id: string;
    url: string;
    width: number;
}

export interface ILikedCat {
    created_at: string;
    id: string;
    image_id: string;
    sub_id: string;
    user_id: string;
    image: IImage;

}

interface IImage{
    id: string;
    url: string;
}