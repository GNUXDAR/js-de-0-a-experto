import HomeView from "@/views/HomeView.vue"
import {  mount } from "@vue/test-utils"

describe('HomeView.vue', () => {
    it('the component render the initial state', () => {
        const wrapper = mount(HomeView)
        if(expect(wrapper.find('h2').exists())) {
            expect(wrapper.find('h2').text()).toBe('0')
        }
        if(expect(wrapper.find('button').exists())) {
            expect(wrapper.find('button').text()).toBe('Increment')
        }
    })
    
    it('the increment button add ones to counter', async () => {
        const wrapper = mount(HomeView)
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('h2').text()).toBe('1')
    })
})