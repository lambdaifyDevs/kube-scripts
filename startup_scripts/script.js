// priority: 0

console.info('Lambda #11. Startup scripts\\script.js')

onEvent('item.registry', event => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('stabilized_hydrogen').displayName('Stabilized Hydrogen')
  event.create('stabilized_deuterium').displayName('Stabilized ^2_1D')
  event.create('stabilized_tritium').displayName('Stabilized ^3_1T')
  event.create('stabilized_four_two_helium').displayName('Stabilized ^4_2He')
  event.create('stabilized_three_two_helium').displayName('Stabilized ^3_2He')
  event.create('destabilized_four_two_helium').displayName('Destabilized ^4_2He')
  event.create('destabilized_miner_a').displayName('Destabilized ^({3<n<4}_2He Planet Miner')
  event.create('laser_miner_a').displayName('Nd:YAG Laser Miner')
})


onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})