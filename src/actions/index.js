export const CAPTURE_POKEMON = "CAPTURE_POKEMON";
export const RELEASE_POKEMON = "RELEASE_POKEMON";


// capture
export const addPokemontoCapture = (result) => {
  return { type: CAPTURE_POKEMON, payload: result }
}



// release
export const releasePokemon = (result) => {
  return { type:  RELEASE_POKEMON, payload: result }
}

