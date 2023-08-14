const vm = new Vue({
    el: '#app',

    data () {
      return {
          courses: [],
          //course: {},
          title: '',
          time: 0,
          total: 0
      }
    },

    computed: {
    	/*totalTime(){
    		return `${this.total = this.total + this.time}`;
    	}*/
        totalTime(){
            let Total = 0;
            this.courses.forEach(course => {
                Total += parseInt(course.time);
            });
            return Total;
        }

    },

    methods: {
        addCourse(){
        	this.courses.push({title:this.title, time:this.time});
        	this.title = '';
        	this.time = 0;
        	//this.tareas.push(this.nuevaTarea);
            //this.courses.push({title:this.title, time:this.time})
        }
    }
  })
