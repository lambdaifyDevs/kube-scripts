// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Lamba #11. -matthyno')

onEvent('recipes', event => {
	// DEFAULT MINECRAFT
  event.shaped('1x minecraft:ancient_debris', [
    'IDI',
    'QQQ',
    'IDI'
  ], {
    D: 'minecraft:diamond',
    I: 'techreborn:refined_iron_ingot',
	Q: 'minecraft:quartz'
  })
    // TECH REBORN
	event.shaped('1x techreborn:nickel_ingot', [
    'ICI',
    '   ',
    '   '
  ], {
    I: 'minecraft:iron_ingot',
	C: 'astromine:copper_ingot'
  })
  event.remove({output: 'techreborn:treetap'})
  event.shaped('1x techreborn:treetap', [
    ' N ',
    'NNN',
    'N  '
  ], {
    N: 'minecraft:netherite_scrap'
  })
  
  event.remove({output: 'techreborn:refined_iron_ingot'})
   event.shaped('1x techreborn:refined_iron_ingot', [
    ' I ',
    'ICI',
    ' I '
  ], {
    I: 'minecraft:iron_ingot',
	C: 'minecraft:coal'
  })
    // AE2
  event.remove({output: 'appliedenergistics2:inscriber'})
   event.shaped('1x appliedenergistics2:inscriber', [
    'NHN',
    'FAN',
    'NHN'
  ], {
    N: 'minecraft:netherite_scrap',
	F: 'appliedenergistics2:fluix_block',
	H: 'techreborn:cupronickel_heating_coil',
	A: 'techreborn:advanced_circuit'
  })
    // INDUSTRIAL REVOLUTION
  event.remove({output: 'indrev:circuit_mk1'})
  event.shaped('1x indrev:circuit_mk1', [
    'NAN',
    'ACA',
    'NAN'
  ], {
    N: 'indrev:nikolite_dust',
	C: 'appliedenergistics2:calculation_processor',
	A: 'techreborn:advanced_circuit'
  })
    // AE2 II
  event.remove({output: 'appliedenergistics2:crafting_unit'})
   event.shaped('1x appliedenergistics2:crafting_unit', [
    'NMN',
    'MCM',
    'NMN'
  ], {
    N: 'indrev:enriched_nikolite_ingot',
	M: 'indrev:circuit_mk4',
	C: 'appliedenergistics2:4k_cell_component'
  })
    // CUSTOM: BASIC FUSION
  event.shaped('1x kubejs:stabilized_hydrogen', [
    'NMN',
    'WCW',
    'NMN'
  ], {
    N: 'indrev:enriched_nikolite_ingot',
	M: 'indrev:circuit_mk4',
	C: 'appliedenergistics2:1k_cell_component',
	W: 'minecraft:water_bucket'
  })
  event.shaped('1x kubejs:stabilized_deuterium', [
    'NMN',
    'HCH',
    'NMN'
  ], {
    N: 'indrev:enriched_nikolite_ingot',
	M: 'indrev:circuit_mk4',
	C: 'appliedenergistics2:1k_cell_component',
	H: 'kubejs:stabilized_hydrogen'
  })
  event.shaped('1x kubejs:stabilized_tritium', [
    'NMN',
    'DCD',
    'NMN'
  ], {
    N: 'indrev:enriched_nikolite_ingot',
	M: 'indrev:circuit_mk4',
	C: 'appliedenergistics2:4k_cell_component',
	D: 'kubejs:stabilized_deuterium'
  })
  event.shaped('1x kubejs:stabilized_four_two_helium', [
    'NMN',
    'TCT',
    'NMN'
  ], {
    N: 'indrev:enriched_nikolite_ingot',
	M: 'indrev:circuit_mk4',
	C: 'appliedenergistics2:64k_cell_component',
	T: 'kubejs:stabilized_tritium'
  })
  event.shaped('2x kubejs:stabilized_three_two_helium', [
    'MDM',
    'DCD',
    'MDM'
  ], {
	M: 'indrev:circuit_mk4',
	C: 'appliedenergistics2:4k_cell_component',
	D: 'kubejs:stabilized_deuterium'
  })
  event.shaped('1x kubejs:stabilized_four_two_helium', [
    'MMM',
    'TCT',
    'MMM'
  ], {
	M: 'indrev:circuit_mk4',
	C: 'appliedenergistics2:64k_cell_component',
	T: 'kubejs:stabilized_three_two_helium'
  })
  event.shaped('1x kubejs:destabilized_four_two_helium', [
    'GFG',
    'FTF',
    'GFG'
  ], {
    F: 'kubejs:stabilized_four_two_helium',
	T: 'kubejs:stabilized_three_two_helium',
	G: 'dml-refabricated:glitch_ingot'
  })
    // CUSTOM: MINING
  event.shaped('1x kubejs:destabilized_miner_a', [
    'DTD',
    'FQF',
    'DTD'
  ], {
    F: 'kubejs:stabilized_four_two_helium',
	T: 'kubejs:stabilized_three_two_helium',
	D: 'kubejs:destabilized_four_two_helium',
	Q: 'enhanced_quarries:enhanced_quarry'
  })
  event.shaped('kubejs:laser_miner_a', [
    'LML',
    'MMM',
    'QLQ'
  ], {
    L: 'indrev:laser_mk4',
	M: 'kubejs:destabilized_miner_a',
	Q: 'enhanced_quarries:enhanced_quarry'
  })
  // CUSTOM: MINER REWARDS
  event.shaped('64x minecraft:iron_block', [
    'MAA',
    'AAA',
    'AAA'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('64x minecraft:gold_block', [
    'AMA',
    'AAA',
    'AAA'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('64x minecraft:diamond_block', [
    'AAM',
    'AAA',
    'AAA'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('64x minecraft:coal_block', [
    'AAA',
    'MAA',
    'AAA'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('64x minecraft:redstone_block', [
    'AAA',
    'AMA',
    'AAA'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('64x minecraft:emerald_block', [
    'AAA',
    'AAM',
    'AAA'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('64x minecraft:netherite_block', [
    'AAA',
    'AAA',
    'MAA'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('64x indrev:copper_block', [
    'AAA',
    'AAA',
    'AMA'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('64x indrev:tin_block', [
    'AAA',
    'AAA',
    'AAM'
  ], {
    M: 'kubejs:destabilized_miner_a',
    A: "minecraft:diamond"
  })
  event.shaped('1x astromine:kerosene_oxygen_fuel_bucket', [
    'LAA',
    'AAA',
    'AAA'
  ], {
    L: 'kubejs:laser_miner_a',
    A: "minecraft:diamond"
  })
    // CUSTOM: OTHER
  event.remove({output: 'astromine:metite_nugget'})
  event.remove({output: 'astromine:metite_tiny_dust'})
  event.shaped('64x astromine:asteroid_metite_ore', [
    'SK ',
    '   ',
    '   '
  ], {
    S: 'minecraft:stone',
    K: "astromine:kerosene_oxygen_fuel_bucket"
  })
  event.shaped('5x astromine:meteoric_steel_block', [
    'MSS',
    'SSS',
    'SSS'
  ], {
    S: 'indrev:steel_block',
    M: "astromine:metite_ingot"
  })
    // DEEP MOB LEARNING
  event.remove({output: 'dml-refabricated:data_model'})
   event.shaped('1x dml-refabricated:data_model', [
    'FCF',
    'TFT',
    'FCF'
  ], {
    F: 'kubejs:stabilized_four_two_helium',
	T: 'kubejs:stabilized_three_two_helium',
	C: 'indrev:circuit_mk4'
  })
  event.remove({id: 'dml-refabricated:trial_key'})
   event.shaped('1x dml-refabricated:trial_key', [
    'GFF',
    'CT ',
    '   '
  ], {
    F: 'kubejs:stabilized_four_two_helium',
	T: 'kubejs:stabilized_three_two_helium',
	C: 'indrev:circuit_mk4',
	G: 'minecraft:gold_ingot'
  })
  event.remove({output: 'dml-refabricated:deep_learner'})
   event.shaped('1x dml-refabricated:deep_learner', [
    'SFS',
    'TCT',
    'SFS'
  ], {
    F: 'kubejs:stabilized_four_two_helium',
	T: 'kubejs:stabilized_three_two_helium',
	C: 'indrev:circuit_mk4',
	S: 'dml-refabricated:soot_plate'
  })
  event.remove({output: 'dml-refabricated:machine_casing'})
   event.shaped('1x dml-refabricated:machine_casing', [
    'SFS',
    'TRT',
    'SFS'
  ], {
    F: 'kubejs:stabilized_four_two_helium',
	T: 'kubejs:stabilized_three_two_helium',
	R: 'minecraft:redstone_block',
	S: 'dml-refabricated:soot_plate'
  })
  event.shaped('4x dml-refabricated:glitch_ingot', [
    'FTF',
    'TGT',
    'FTF'
  ], {
    F: 'kubejs:stabilized_four_two_helium',
	T: 'kubejs:stabilized_three_two_helium',
	G: 'dml-refabricated:glitch_ingot'
  })
  event.remove({output: 'enhanced_quarries:normal_quarry'})
   event.shaped('1x enhanced_quarries:normal_quarry', [
    'GFG',
    'TTT',
    'GNG'
  ], {
    F: 'kubejs:stabilized_four_two_helium',
	T: 'kubejs:stabilized_three_two_helium',
	N: 'minecraft:netherite_pickaxe',
	G: 'dml-refabricated:glitch_ingot'
  })
    // ASTROMINE
  event.remove({output: 'astromine:meteoric_steel_gear'})
  event.remove({output: 'astromine:primitive_rocket_booster'})
   event.shaped('1x astromine:primitive_rocket_booster', [
    ' M ',
    'M M',
    'MMM'
  ], {
    M: 'astromine:meteoric_steel_ingot'
  })
  event.remove({output: 'astromine:primitive_rocket_fuel_tank'})
   event.shaped('1x astromine:primitive_rocket_fuel_tank', [
    ' M ',
    'M M',
    ' M '
  ], {
    M: 'astromine:meteoric_steel_ingot'
  })
  event.remove({output: 'astromine:primitive_rocket_hull'})
   event.shaped('1x astromine:primitive_rocket_hull', [
    'MMM',
    'M M',
    'MMM'
  ], {
    M: 'astromine:meteoric_steel_ingot'
  })
  event.remove({output: 'astromine:primitive_rocket_plating'})
   event.shaped('1x astromine:primitive_rocket_plating', [
    ' M ',
    'MMM',
    ' M '
  ], {
    M: 'astromine:meteoric_steel_ingot'
  })
  event.remove({output: 'astromine:rocket'})
   event.shaped('1x astromine:rocket', [
    ' P ',
    'FHF',
    'BBB'
  ], {
    B: 'astromine:primitive_rocket_booster',
	F: 'astromine:primitive_rocket_fuel_tank',
	P: 'astromine:primitive_rocket_plating',
	H: 'astromine:primitive_rocket_hull'
  })
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})