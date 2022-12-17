let obj = {
  data() {
    return {
      name: '',
      date: '',
      daysWorked: '' ,
      salary: '',
      totalSalary: []
    }
  },
  computed: {
    totalWithoutTax() {
      return this.totalSalary.reduce((acc, worker) => acc + worker.salary, 0)
    },
    totalWithTax() {
      return this.totalSalary.reduce((acc, worker) => acc + worker.salary * 0.85, 0)
    }
  },
  methods: {
    addWorker() {

      if (this.name && this.date && this.daysWorked && this.salary) {
        this.totalSalary.push({
          name: this.name,
          date: this.date,
          daysWorked: this.daysWorked,
          salary: this.salary
        })
        this.name = ''
        this.date = ''
        this.daysWorked = ''
        this.salary = ''
      } else {
        alert('Fill in all fields!')
      }
    },
    removeWorker(index) {
      this.totalSalary.splice(index, 1)
    }
  }
}


Vue.createApp(obj).mount('#salary')