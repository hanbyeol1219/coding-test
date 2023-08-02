
const solution = (nums) => {
    const noDuplicatePokemon = new Set(nums);
    const pokemonVarietyCount = noDuplicatePokemon.size;
    return pokemonVarietyCount > nums.length/2 ? nums.length/2 : pokemonVarietyCount;
}
