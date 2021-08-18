<template>
  <section id="expense_claim">
    <div class="container">
      <div class="card shadow">
        <div class="card-body">
          <!-- Heading section -->
          <div class="row">
            <div class="col-6">
              <h1 class="main-title text-uppercase text-left">Expense claim voucher</h1>
            </div>
            <div class="col-6">
              <div class="text-right">
                <!-- Clear saved data -->
                <button
                  class="btn delete_btn transition-3d-hover btn-sm mr-2"
                  @click="clearData()"
                  type="button"
                >
                  <i class="far fa-trash-alt fa-lg"></i>&nbsp;Delete form
                </button>
                <!-- Preview button -->
                <button
                  class="btn preview_btn transition-3d-hover btn-sm mr-2"
                  @click="expensePreview()"
                  type="button"
                >
                  <i :class="showPreview?'fas fa-times fa-lg':'far fa-edit fa-lg'"></i>
                  &nbsp;{{showPreview?"Close":"Save & Edit"}}
                </button>
              </div>
            </div>
          </div>
          <!-- Form Section -->
          <div class="row" v-if="!showPreview">
            <div class="col-12 col-md-12 col-lg-12">
              <form ref="form">
                <div class="row">
                  <div class="col">
                    <!-- Employee name -->
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Employee name*"
                        v-model="emp_detail.emp_name"
                        v-validate="'required|alpha_spaces'"
                        name="employee name"
                        maxlength="100"
                      />
                      <small
                        class="text-muted"
                      >Employee name should be fewer than 100 characters long</small>
                      <br />
                      <small class="text-danger">{{errors.first('employee name')}}</small>
                    </div>
                  </div>
                  <div class="col">
                    <!-- Employee id -->
                    <div class="form-group">
                      <input
                        type="number"
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                        class="form-control"
                        placeholder="Employee id *"
                        v-model="emp_detail.emp_id"
                        v-validate="'required|numeric|integer'"
                        name="employee id"
                        maxlength="5"
                        minlength="5"
                      />
                      <small class="text-muted">Employee Id must be 5 characters long.</small>
                      <br />
                      <small class="text-danger">{{errors.first('employee id')}}</small>
                    </div>
                  </div>
                </div>

                <!-- Business purpose -->
                <div class="form-group">
                  <textarea
                    rows="4"
                    class="form-control"
                    placeholder="Business purpose*"
                    v-model="emp_detail.purpose"
                    v-validate="'required'"
                    name="purpose"
                    maxlength="150"
                  ></textarea>
                  <small class="text-muted">Business purpose should be fewer than 150 characters</small>
                  <br />
                  <small class="text-danger">{{errors.first('purpose')}}</small>
                </div>

                <!-- Claim Type -->
                <div class="form-group">
                  <select name="bill" class="form-control" v-model="emp_detail.type">
                    <option value selected disabled hidden>Please select the claim type</option>
                    <option value="Office Expenses">Office Expenses</option>
                    <option value="Per Diem Claim">Per Diem Claim</option>
                    <option value="Weekend/Holiday Support">Weekend/Holiday Support</option>
                  </select>
                </div>

                <div class="row" v-if="emp_detail.type && emp_detail.type!='Office Expenses'">
                  <div class="col-md-6">
                    <!-- From date -->
                    <div class="form-group">
                      <label for="from-date">From Date*</label>
                      <input
                        type="date"
                        id="from-date"
                        class="form-control"
                        placeholder="From date *"
                        v-model="emp_detail.from_date"
                        name="from date"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <!-- To date -->
                    <div class="form-group">
                      <label for="to-date">To Date*</label>
                      <input
                        type="date"
                        id="to-date"
                        class="form-control"
                        name="to date"
                        placeholder="To date *"
                        :min="emp_detail.from_date"
                        v-model="emp_detail.to_date"
                        required
                      />
                    </div>
                  </div>
                </div>
                <!-- Accordian -->
                <div
                  class="accordion"
                  id="accordionExample"
                  v-if="checkValid && !errors.first('employee name') && !errors.first('employee id')"
                >
                  <div class="card" v-for="(expenseData,index) in expensesData" :key="index">
                    <div class="card-header" id="headingOne">
                      <h2 class="mb-0">
                        <p class="accordion_expense">
                          <button
                            class="btn btn-link"
                            type="button"
                            data-toggle="collapse"
                            :data-target="`#collapse${index}`"
                            aria-expanded="false"
                            :aria-controls="`collapse${index}`"
                          >
                            <i :class="expenseData.icon"></i>
                            {{expenseData.exp_name}}
                          </button>
                        </p>
                      </h2>
                    </div>
                    <div
                      :id="`collapse${index}`"
                      class="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div class="card-body">
                        <div class="row category">
                          <div
                            class="col-3"
                            v-for="(category,cat_index) in expenseData.category"
                            :key="cat_index"
                          >
                            <!-- Card button -->
                            <div
                              class="card shadow p-3 mb-2 text-center"
                              data-toggle="modal"
                              :data-target="'#exampleModalCenter'+index"
                              @click="assignData(expenseData.exp_name, category)"
                            >{{category}}</div>

                            <!-- Modal -->
                            <div
                              class="modal fade"
                              :id="'exampleModalCenter'+index"
                              tabindex="-1"
                              role="dialog"
                              aria-labelledby="exampleModalCenterTitle"
                              aria-hidden="true"
                            >
                              <div class="modal-dialog modal-dialog-centered" role="document">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <p class="modal-title text-muted" id="exampleModalCenterTitle">
                                      <b>{{modalData.exp_name}} > {{modalData.category_name}}</b>
                                    </p>
                                    <button
                                      type="button"
                                      class="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <!-- Amount -->
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Amount *"
                                        v-model="modalData.amount"
                                        v-validate="'required|decimal:4'"
                                        name="amount"
                                      />
                                      <small class="text-danger">{{errors.first('amount')}}</small>
                                    </div>
                                    <!-- Vendor -->
                                    <div class="form-group">
                                      <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Vendor *"
                                        v-model="modalData.vendor"
                                        v-validate="'required'"
                                        name="vendor"
                                        maxlength="100"
                                      />
                                      <small
                                        class="text-muted"
                                      >Vendor should be fewer than 100 characters</small>
                                      <br />
                                      <small class="text-danger">{{errors.first('vendor')}}</small>
                                    </div>
                                    <!-- Date -->
                                    <div class="form-group">
                                      <input
                                        type="date"
                                        class="form-control"
                                        name="to"
                                        :min="emp_detail.from_date"
                                        :max="emp_detail.to_date"
                                        placeholder="To date *"
                                        v-model="modalData.date"
                                        :disabled="!emp_detail.from_date || !emp_detail.to_date"
                                        v-if="emp_detail.type!='Office Expenses'"
                                      />
                                      <input
                                        type="date"
                                        class="form-control"
                                        name="to"
                                        placeholder="To date *"
                                        v-model="modalData.date"
                                        v-else
                                      />
                                      <small
                                        class="text-danger"
                                        v-if="emp_detail.type!='Office Expenses'&&(!emp_detail.from_date || !emp_detail.to_date)"
                                      >*Please fill the from and to date.</small>
                                    </div>
                                    <!-- Bill avaliable -->
                                    <div class="form-group">
                                      <select
                                        name="bill"
                                        class="form-control"
                                        v-model="modalData.bill"
                                      >
                                        <option
                                          value
                                          selected
                                          disabled
                                          hidden
                                        >Please select the bill avaliability</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-primary btn-soft-primary transition-3d-hover"
                                      data-dismiss="modal"
                                      @click="addToReport()"
                                      :disabled="!modalData.amount || !modalData.bill || !modalData.vendor || !modalData.date"
                                    >Add to report</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <!-- Preview Component -->
          <div v-else>
            <ExpensePreview @changed="isChanged" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import ExpensePreview from "../components/Expense_Preview";

export default {
  name: "ExpenseClaimForm",
  data() {
    return {
      emp_detail: {
        emp_name: "",
        emp_id: "",
        purpose: "",
        from_date: "",
        to_date: "",
        type: "",
        categoryData: [],
        total: 0,
      },
      isChangedData: false,
      expensesData: [],
      modalData: {
        id: "",
        exp_name: "",
        category_name: "",
        vendor: "",
        amount: "",
        date: "",
        bill: "",
      },
      draftData: [],
      showPreview: false,
    };
  },
  components: {
    ExpensePreview,
  },
  computed: {
    checkValid() {
      if (
        !this.emp_detail.emp_name ||
        !this.emp_detail.emp_id ||
        !this.emp_detail.purpose ||
        !this.emp_detail.type
      ) {
        return false;
      } else if (
        this.emp_detail.type != "Office Expenses" &&
        (!this.emp_detail.from_date || !this.emp_detail.to_date)
      ) {
        return false;
      } else {
        return true;
      }
    },
  },
  created() {
    this.getSavedData();
    this.getExpenses();
  },
  methods: {
    // Get and assign the saved data from localStorage
    getSavedData() {
      const savedData = JSON.parse(localStorage.getItem("employee_data"))
        ? JSON.parse(localStorage.getItem("employee_data"))
        : "";
      if (savedData) {
        this.emp_detail.emp_name = savedData.emp_name;
        this.emp_detail.emp_id = savedData.emp_id;
        this.emp_detail.purpose = savedData.purpose;
        this.emp_detail.type = savedData.type;
        this.emp_detail.from_date = savedData.from_date;
        this.emp_detail.to_date = savedData.to_date;
        this.emp_detail.categoryData = savedData.categoryData;
      }
    },
    // Clear localStorage
    clearData() {
      localStorage.removeItem("employee_data");
      this.emp_detail.emp_name = "";
      this.emp_detail.emp_id = "";
      this.emp_detail.purpose = "";
      this.emp_detail.type = "";
      this.emp_detail.from_date = "";
      this.emp_detail.to_date = "";
      this.emp_detail.categoryData = [];
      this.$validator.reset();
      this.showPreview = false;
    },
    // Get the expense data from JSON file
    getExpenses() {
      axios.get("expense_static_data.json").then(({ data }) => {
        this.expensesData = data;
      });
    },
    // To generate the unique id
    generateId() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    },
    // Assign the data for modal
    assignData(exp_name, category_name) {
      this.modalData.id = this.generateId();
      this.modalData.exp_name = exp_name;
      this.modalData.category_name = category_name;
      this.modalData.vendor = "";
      this.modalData.amount = "";
      this.modalData.date = "";
      this.modalData.bill = "";
      this.$validator.reset();
    },
    // To calculate the total price
    calculateTotalPrice() {
      var totalCalc = 0;
      this.emp_detail.categoryData.filter((data) => {
        totalCalc += +data.amount;
      });
      return totalCalc;
    },
    // Add the modal data into localStorage
    addToReport() {
      this.emp_detail.categoryData.push({ ...this.modalData });
    },
    // Check for unsaved data
    checkModified() {
      const answer = window.confirm(
        "Do you really want to leave? you have unsaved changes!"
      );
      if (answer) {
        return true;
      } else {
        return false;
      }
    },
    // Preview Logic
    getPreview() {
      if (this.checkValid) {
        this.emp_detail.total = this.calculateTotalPrice();
        if (this.showPreview) {
          this.getSavedData();
        } else {
          localStorage.setItem(
            "employee_data",
            JSON.stringify(this.emp_detail)
          );
        }
      }
    },
    // Preview Method
    expensePreview() {
      if (this.isChangedData) {
        const validate = this.checkModified();
        if (validate) {
          this.getPreview();
          this.isChangedData = false;
          this.showPreview = !this.showPreview;
        } else {
          this.showPreview = !!this.showPreview;
        }
      } else {
        if (this.checkValid) {
          this.getPreview();
          this.showPreview = !this.showPreview;
        } else {
          this.$validator.validate().then((valid) => {
            if (!valid) return;
          });
        }
      }
    },
    // To check the unsaved data
    isChanged(value) {
      this.isChangedData = value;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.isChangedData) {
      const answer = window.confirm(
        "Do you really want to leave? you have unsaved changes!"
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
</script>

<style scoped>
#expense_claim {
  position: relative;
  padding-top: 10rem;
  padding-bottom: 8rem;
  background: linear-gradient(-45deg, #a24bcf, #3498db, #4bc5cf);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

#expense_claim .card {
  border-radius: 5px;
  border: 1px solid transparent !important;
  background-color: rgba(255, 255, 255, 0.8);
}

#expense_claim h1.main-title {
  font-size: 2rem;
}

/* Accordion */

.accordion .card {
  margin-top: 10px;
}

.accordion {
  position: relative;
}

.accordion .card .card-header {
  background: transparent;
}

.accordion .card .card-body {
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.btn-link {
  color: #6c757d;
  text-transform: capitalize;
}

.btn-link:hover {
  color: #377dff;
}

/* Accordion Show/Hide style */
.btn-link::before {
  font-family: "Font Awesome 5 Free";
  content: "\f054";
  font-weight: 900;
  position: absolute;
  right: 20px;
  padding: 0 20px;
  transition: all 0.5s;
}

button[aria-expanded="true"] {
  color: #377dff;
}

button[aria-expanded="true"]::before {
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  transform: rotate(90deg);
}

.fas {
  font-size: 1.5rem;
  margin-right: 10px;
  font-weight: bold;
}

.category .card {
  transition: all 0.5s;
  cursor: pointer;
  border: 1px solid transparent;
}

.category .card:hover {
  background: #377dff!important;
  color: #ffff!important;
}

/* Modal */
.collapse .modal .btn {
  font-size: 16px;
}

.collapse .modal .btn-large {
  padding: 0.5;
}

.preview_btn {
  font-size: 14px;
  background-color: transparent;
  color: #377dff;
}

.preview_btn:hover {
  color: #ffff;
  background-color: #377dff;
}

.delete_btn {
  font-size: 14px;
  color: #f12639;
  background-color: transparent;
}

.delete_btn:hover {
  color: #ffff;
  background-color: #f12639;
}
</style>