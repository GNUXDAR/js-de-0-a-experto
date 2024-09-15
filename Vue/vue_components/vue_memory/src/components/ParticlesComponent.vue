<template>
	<div id="app">
		<vue-particles id="tsparticles" @particles-loaded="particlesLoaded" url="http://foo.bar/particles.json" />

		<vue-particles id="tsparticles" @particles-loaded="particlesLoaded" :options="{
			// fullScreen: {
			// 	enable: true
			// },
			// particles: {
			// 	number: {
			// 	value: 0
			// 	},
			// 	color: {
			// 	value: ['#1E00FF', '#FF0061', '#E1FF00', '#00FF9E']
			// 	},
			// 	shape: {
			// 		type: 'confetti',
			// 		options: {
			// 			confetti: {
			// 			type: ['circle', 'square']
			// 			}
			// 		}
			// 	},
			// 	opacity: {
			// 		value: 1,
			// 		animation: {
			// 			enable: true,
			// 			minimumValue: 0,
			// 			speed: 2,
			// 			startValue: 'max',
			// 			destroy: 'min'
			// 		}
			// 	},
			// 	size: {
			// 		value: 7,
			// 		random: {
			// 			enable: true,
			// 			minimumValue: 3
			// 		}
			// 	},
			// 	life: {
			// 		duration: {
			// 			sync: true,
			// 			value: 5
			// 		},
			// 		count: 1
			// 	},
			// 	move: {
			// 		enable: true,
			// 		gravity: {
			// 			enable: true,
			// 			acceleration: 20
			// 		},
			// 		speed: 50,
			// 		decay: 0.05,
			// 		direction: 'none',
			// 		outModes: {
			// 			default: 'destroy',
			// 			top: 'none'
			// 		}
			// 	}
			// },
			// interactivity: {
			// 	detectsOn: 'canvas',
			// 	events: {
			// 		resize: true
			// 	}
			// },
			// detectRetina: true,
			// background: {
			// 	color: '#000'
			// },
			// responsive: [
			// 	{
			// 	maxWidth: 700,
			// 	options: {
			// 		particles: {
			// 		move: {
			// 			speed: 30,
			// 			decay: 0.05
			// 		}
			// 		}
			// 	}
			// 	}
			// ],
			// emitters: [
			// 	{
			// 	direction: 'top-right',
			// 	rate: {
			// 		delay: 0.1,
			// 		quantity: 10
			// 	},
			// 	position: {
			// 		x: 0,
			// 		y: 50
			// 	},
			// 	size: {
			// 		width: 0,
			// 		height: 0
			// 	}
			// 	},
			// 	{
			// 		direction: 'top-left',
			// 		rate: {
			// 			delay: 0.1,
			// 			quantity: 10
			// 		},
			// 		position: {
			// 			x: 100,
			// 			y: 50
			// 		},
			// 		size: {
			// 			width: 0,
			// 			height: 0
			// 		}
			// 	}
			// ]
			// end confeti
		
			background: {
				color: {
					value: '#0d47a1'
				}
			},
			fullScreen:{
				zIndex: -1
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push'
					},
					onHover: {
						enable: true,
						mode: 'grab', //repulse, grab
					},
				},
				modes: {
					bubble: {
						distance: 400,
						duration: 2,
						opacity: 0.8,
						size: 40
					},
					push: {
						quantity: 4
					},
					repulse: {
						distance: 200,
						duration: 0.4
					}
				}
			},
			particles: {
				color: {
					value: '#ffffff'
				},
				links: {
					color: '#ffffff',
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: 'bounce',
					random: false,
					speed: 6,
					straight: false
				},
				number: {
					density: {
						enable: true,
					},
					value: 80
				},
				opacity: {
					value: 0.5
				},
				shape: {
					type: [
						'square',
						'circle'
					],
				},
				size: {
					value: { min: 1, max: 5 }
				}
			},
			detectRetina: true
		}" />
	</div>
</template>

<script>
export default {
	name: 'ParticleComponent',
	data() {
		return {
			// 
		}
	},
	methods: {
		particlesLoaded() {
			console.log("Particles container loaded");
		}
	}
}
</script>

<style>

</style>