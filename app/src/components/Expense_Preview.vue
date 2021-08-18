<template>
  <div id="expense_preview">
    <div class="row pt-4" v-if="emp_detail">
      <div class="col">
        <div class="card shadow">
          <div class="card-body">
            <!-- Save & Print button -->
            <div class="row mt-2 pb-2 text-right">
              <div class="col">
                <!-- Save button -->
                <button
                  class="btn save_button transition-3d-hover btn-sm mr-2"
                  type="button"
                  :disabled="isDisabled"
                  @click="saveChanges()"
                >
                  <span
                    class="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                    v-if="isDisabled"
                  ></span>
                  <i class="far fa-save fa-lg" v-if="!isDisabled"></i>
                  &nbsp;{{isDisabled ? 'Saving...': 'Save'}}
                </button>
                <!-- Preview modal button -->
                <button
                  type="button"
                  class="btn preview_button transition-3d-hover btn-sm mr-2"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  :disabled="!isPrintable"
                >
                  <i class="far fa-eye fa-lg"></i>
                  &nbsp;Preview
                </button>

                <!-- Print and Preview Modal -->
                <div
                  class="modal fade"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Expense form Preview</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <!-- Pdf html -->
                        <div id="printPdf">
                          <div class="row mt-5 pt-5">
                            <div class="col">
                              <!-- Header -->
                              <div class="row pb-3" v-if="emp_detail">
                                <div class="col-6">
                                  <div class="text-left">
                                    <h4>
                                      <b>Expense Claim Voucher</b>
                                    </h4>
                                    <p class="text-left" v-if="emp_detail.emp_id">
                                      <b>Voucher ID:</b>
                                      {{getUniqueID(emp_detail.emp_id)}}
                                    </p>
                                  </div>
                                </div>
                                <div class="col-6">
                                  <div class="text-right">
                                    <img
                                      src="../assets/img/acodeidea_logo.png"
                                      class="img-fluid"
                                      alt
                                    />
                                  </div>
                                </div>
                              </div>
                              <hr style="border: 1px solid rgba(0, 0, 0, 0.8) !important;" />
                              <!-- Employee Details -->
                              <div class="row pb-2 pt-3 mt-5" v-if="emp_detail">
                                <div class="col">
                                  <table class="table table-bordered table_legenda border-dark">
                                    <tbody>
                                      <tr>
                                        <th
                                          scope="row"
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >Employee Name</th>
                                        <td
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >{{emp_detail.emp_name}}</td>
                                      </tr>
                                      <tr>
                                        <th
                                          scope="row"
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >Employee ID</th>
                                        <td
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >{{emp_detail.emp_id}}</td>
                                      </tr>
                                      <tr>
                                        <th
                                          scope="row"
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >Business Purpose</th>
                                        <td
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >{{emp_detail.purpose}}</td>
                                      </tr>
                                      <tr>
                                        <th
                                          scope="row"
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >Claim Type</th>
                                        <td
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >{{emp_detail.type}}</td>
                                      </tr>
                                      <tr v-if="emp_detail.from_date && emp_detail.to_date">
                                        <th
                                          scope="row"
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >From Date</th>
                                        <td
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >{{emp_detail.from_date | formatDate}}</td>
                                      </tr>
                                      <tr v-if="emp_detail.from_date && emp_detail.to_date">
                                        <th
                                          scope="row"
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >To Date</th>
                                        <td
                                          style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                        >{{emp_detail.to_date | formatDate}}</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>

                              <!-- Expense content -->
                              <div class="row mt-5 mb-2" v-if="emp_detail.categoryData">
                                <div class="col" v-if="emp_detail.categoryData.length">
                                  <div class="exp_details">
                                    <table class="table table-bordered text-center">
                                      <thead>
                                        <tr>
                                          <th
                                            scope="col"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >#</th>
                                          <th
                                            scope="col"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >Date</th>
                                          <th
                                            scope="col"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >Description</th>
                                          <th
                                            scope="col"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >Category</th>
                                          <th
                                            scope="col"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >Vendor</th>
                                          <th
                                            scope="col"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >Bill / Receipt Attached</th>
                                          <th
                                            scope="col"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >Amount</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr
                                          v-for="(categoryData, index) in emp_detail.categoryData"
                                          :key="index"
                                        >
                                          <th
                                            scope="row"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >{{index+1}}</th>
                                          <td
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >{{categoryData.date | formatDate}}</td>
                                          <td
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >{{categoryData.exp_name}}</td>
                                          <td
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >{{categoryData.category_name}}</td>
                                          <td
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >{{categoryData.vendor}}</td>
                                          <td
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >{{categoryData.bill}}</td>
                                          <td
                                            style="text-align:right!important; border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >&#8377; {{categoryData.amount}}</td>
                                        </tr>
                                        <tr>
                                          <th
                                            colspan="6"
                                            class="text-right"
                                            style="border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >Total</th>
                                          <td
                                            style="text-align:right!important; border: 1px solid rgba(0, 0, 0, 0.8) !important;"
                                          >&#8377; {{emp_detail.total}}</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>

                              <!-- Expense calculation -->
                              <div
                                class="row mb-2 text-left"
                                v-if="emp_detail.type!='Office Expenses'"
                              >
                                <div class="col">
                                  <small>
                                    <b>No.of.days:</b>
                                    {{calculateDays()}}
                                  </small>
                                </div>
                                <div class="col">
                                  <small>
                                    <b>Per Diem Allowance:</b> &#8377; 1800/per day
                                  </small>
                                </div>
                                <div class="col">
                                  <small>
                                    <b>Expense Reimbursement:</b>
                                    &#8377; {{total}}
                                  </small>
                                </div>
                              </div>

                              <div
                                class="row mt-2 mb-2 text-left"
                                v-if="emp_detail.type!='Office Expenses'"
                              >
                                <div class="col">
                                  <small>
                                    <b>Total Allowance:</b>
                                    &#8377; {{totalAllowance()}}
                                  </small>
                                </div>
                                <div class="col">
                                  <small>
                                    <b>Special Pay:</b>
                                    &#8377; {{ (specialPay() > 0) ? specialPay() : 0}}
                                  </small>
                                </div>
                                <div class="col">
                                  <small>
                                    <b>Excess:</b>
                                    &#8377; {{ (specialPay() > 0) ? 0 : Math.abs(specialPay()) }}
                                  </small>
                                </div>
                              </div>

                              <!-- Signature -->
                              <hr style="border-top: 1px solid rgba(0, 0, 0, 0.7) !important;" />
                              <div class="row">
                                <div class="col text-center">
                                  <small class="text-muted">
                                    <b>For office use only</b>
                                  </small>
                                </div>
                              </div>
                              <div class="row mt-5 pt-5 sign font-weight-bold">
                                <div class="col">
                                  <div class="float-left">
                                    <p>Reviewer Signature &nbsp;&nbsp;</p>
                                    <p>Name :</p>
                                    <p>Date :</p>
                                  </div>
                                </div>
                                <div class="col">
                                  <div class="float-right pr-5">
                                    <p>Approver Signature &nbsp;&nbsp;</p>
                                    <p>Name :</p>
                                    <p>Date :</p>
                                  </div>
                                </div>
                              </div>
                              <hr style="border-top: 1px solid rgba(0, 0, 0, 0.7) !important;" />
                              <div class="row sign font-weight-bold">
                                <div class="col">
                                  <div class="float-left">
                                    <p>Paid by Cash/Cheque/Bank Transfer</p>
                                    <p>Payment Date:</p>
                                    <p>Ref No:</p>
                                  </div>
                                </div>
                              </div>
                              <hr style="border-top: 1px solid rgba(0, 0, 0, 0.7) !important;" />
                              <div class="row mt-2">
                                <div class="col">
                                  <div class="text-center">
                                    <small
                                      class="text-muted"
                                    >*This form has to be Signed by reviewer and approver.</small>
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

                <!-- Print button -->
                <button
                  class="btn print_button transition-3d-hover btn-sm mr-2"
                  type="button"
                  @click="printForm()"
                  :disabled="!isPrintable"
                >
                  <i class="fas fa-print fa-lg"></i>
                  &nbsp;Print
                </button>
              </div>
            </div>

            <!-- Employee Detail -->
            <div class="row mt-2 pt-2">
              <div class="col">
                <div class="table-responsive">
                  <table class="table table-bordered">
                    <tbody>
                      <tr>
                        <!-- Employee Name -->
                        <th scope="col">Employee Name</th>
                        <td>{{emp_detail.emp_name}}</td>
                        <!-- Employee ID -->
                        <th scope="col">Employee ID</th>
                        <td>{{emp_detail.emp_id}}</td>
                      </tr>
                      <tr>
                        <!-- Business Purpose -->
                        <th scope="col">Business Purpose</th>
                        <td>{{emp_detail.purpose}}</td>
                        <!-- Type -->
                        <th scope="col">Claim Type</th>
                        <td>{{emp_detail.type}}</td>
                      </tr>
                      <tr v-if="emp_detail.from_date && emp_detail.to_date">
                        <!-- Form Date -->
                        <th scope="col">From Date</th>
                        <td>{{emp_detail.from_date | formatDate}}</td>
                        <!-- To Date -->
                        <th scope="col">To Date</th>
                        <td>{{emp_detail.to_date | formatDate}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Edit Table -->
            <div class="row mt-3 pt-3 editable">
              <div class="col">
                <!-- Table editable -->
                <div id="table-bottom"></div>
                <!-- Total amount -->
                <div class="row mt-2">
                  <div class="col">
                    <small class="text-danger">
                      <b>Note:</b> **Double click to delete the row from table
                    </small>
                  </div>
                  <div class="col text-right">
                    <p>
                      <b style="color:#212529;">Total:</b>
                      &#8377; {{total}}
                    </p>
                  </div>
                </div>
                <!-- Expense calculation -->
                <div class="row mt-2 mb-2" v-if="emp_detail.type!='Office Expenses'">
                  <div class="col">
                    <small>
                      <b>No.of.days:</b>
                      {{calculateDays()}}
                    </small>
                  </div>
                  <div class="col">
                    <small>
                      <b>Per Diem Allowance:</b> &#8377; 1800/per day
                    </small>
                  </div>
                  <div class="col">
                    <small>
                      <b>Expense Reimbursement:</b>
                      &#8377; {{total}}
                    </small>
                  </div>
                </div>

                <div class="row mt-2 mb-2" v-if="emp_detail.type!='Office Expenses'">
                  <div class="col">
                    <small>
                      <b>Total Allowance:</b>
                      &#8377; {{totalAllowance()}}
                    </small>
                  </div>
                  <div class="col">
                    <small>
                      <b>Special Pay:</b>
                      &#8377; {{ (specialPay() > 0) ? specialPay() : 0}}
                    </small>
                  </div>
                  <div class="col">
                    <small>
                      <b>Excess:</b>
                      &#8377; {{ (specialPay() > 0) ? 0 : Math.abs(specialPay()) }}
                    </small>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h5 v-else>*Please fill the form details!</h5>
  </div>
</template>


<script>
export default {
  name: "ExpensePreview",
  data() {
    return {
      emp_detail: "",
      total: 0,
      isDisabled: false,
      isChangedData: false,
    };
  },
  mounted() {
    var that = this;
    var dateEditor = function (
      cell,
      onRendered,
      success,
      cancel,
      editorParams
    ) {
      var editor = document.createElement("input");
      editor.setAttribute("type", "date");
      editor.style.padding = "6px";
      editor.style.width = "100%";
      editor.style.boxSizing = "border-box";

      editor.value = moment(cell.getValue(), "MM/DD/YYYY");
      onRendered(function () {
        editor.focus();
        editor.style.css = "100%";
      });
      function successFunc() {
        // var fromDate = that.emp_detail.from_date
        //   ? that.emp_detail.from_date
        //   : "";
        // var toDate = that.emp_detail.to_date ? that.emp_detail.to_date : "";
        if (editor.value) {
          // if (fromDate && toDate) {
          //   var range = moment().range(new Date(fromDate), new Date(toDate));
          //   if(!range.contains(new Date(editor.value))){throw new Error('Invalid Date')}
          // }
          success(moment(editor.value, "YYYY-MM-DD")._i);
        } else {
          cancel(moment(cell.getValue(), "MM/DD/YYYY"));
        }
      }
      editor.addEventListener("change", successFunc);
      editor.addEventListener("blur", successFunc);
      return editor;
    };

    var getDataValue = function (cell, formatterParams, onRendered) {
      var value = cell.getValue();
      if (value) {
        value = moment(value, "YYYY-MM-DD").format("MM/DD/YYYY");
      }
      return value;
    };

    // Tabulator configuration
    var table = new Tabulator("#table-bottom", {
      data: that.emp_detail.categoryData,
      layout: "fitColumns",
      placeholder:
        "<i class='far fa-frown'></i><small> Oops, You don't have the expense data.</small>",
      columns: [
        {
          title: "Date",
          field: "date",
          sorter: "date",
          editor: dateEditor,
          formatter: getDataValue,
        },
        { title: "Description", field: "exp_name" },
        { title: "Category", field: "category_name" },
        {
          title: "Vendor",
          field: "vendor",
          editor: "input",
          validator: ["required", "maxLength:100"],
        },
        {
          title: "Bill/Recipt Attached",
          field: "bill",
          editor: "select",
          editorParams: {
            values: ["Yes", "No"],
          },
        },
        {
          title: "Amount",
          field: "amount",
          editor: "number",
          validator: ["required", "numeric"],
        },
      ],
      rowDblClick: function (e, row) {
        if (confirm("Are you sure to delete?")) {
          table.deleteRow(row.getData().id);
          that.emp_detail.total = that.total = that.calculateTotalPrice();
          that.$emit("changed", true);
        } else {
          return;
        }
      },
      dataEdited: function (data) {
        // Response data for every update
        that.$emit("changed", true);
        that.emp_detail.categoryData = data;
        that.emp_detail.total = that.total = that.calculateTotalPrice();
      },
    });
  },
  computed: {
    isPrintable() {
      if (
        this.emp_detail &&
        this.emp_detail.categoryData.length &&
        this.emp_detail.total
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  created() {
    this.getLocalStorageData();
  },
  methods: {
    // Get details from localStorage
    getLocalStorageData() {
      // Get employee data
      this.emp_detail = JSON.parse(localStorage.getItem("employee_data"));
      // Total calculation
      this.total = this.emp_detail.total;
    },
    // To calculate the total price
    calculateTotalPrice() {
      var totalCalc = 0;
      this.emp_detail.categoryData.filter((data) => {
        totalCalc = totalCalc + +data.amount;
      });
      return totalCalc;
    },
    // Calculate no of days
    calculateDays() {
      const from = moment(this.emp_detail.from_date, "YYYY-MM-DD");
      const to = moment(this.emp_detail.to_date, "YYYY-MM-DD");
      return to.diff(from, "days") + 1;
    },
    // Generate unique voucher id
    getUniqueID(id) {
      const date = new Date();
      return `ACI/${id}/${date.getDate()}${
        date.getMonth() + 1
      }${date.getFullYear()}/${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    },
    // Print the form
    printForm() {
      if (this.isPrintable) {
        this.$htmlToPaper("printPdf");
      }
    },
    // Find the total allowance
    totalAllowance() {
      return 1800 * this.calculateDays();
    },
    // To find the special pay
    specialPay() {
      return this.totalAllowance() - this.total;
    },
    // Save the new data to localStorage
    saveChanges() {
      this.isDisabled = true;
      if (this.emp_detail && this.emp_detail.categoryData.length) {
        this.$emit("changed", false);
        // Store the data after 1.5 sec
        this.emp_detail.total = this.total;
        setTimeout(() => {
          localStorage.setItem(
            "employee_data",
            JSON.stringify(this.emp_detail)
          );
          this.isDisabled = false;
        }, 1500);
      } else {
        this.isDisabled = false;
      }
    },
  },
};
</script>


<style lang="css">
.text-danger {
  color: red;
}
/* Tabulator */
.tabulator {
  border: 1px solid rgb(221, 221, 221);
  text-align: center !important;
}

.tabulator .tabulator-col,
.tabulator .tabulator-cell {
  text-align: center !important;
  border-right: 1px solid rgb(221, 221, 221);
}

#table-bottom {
  height: initial !important;
}

/* Input and button */

.tabulator-cell[tabulator-field="date"] {
  color: #007bff;
}

.tabulator-cell[tabulator-field="vendor"] {
  color: #007bff;
}

.tabulator-cell[tabulator-field="bill"] {
  color: #007bff;
}

.tabulator-cell[tabulator-field="amount"] {
  color: #007bff;
}

input.date {
  border: 0px solid transparent;
  max-width: none !important;
  text-align: center;
  color: #007bff;
}
.text-blue {
  color: #007bff;
  cursor: pointer;
}
a:hover {
  text-decoration: none !important;
}
#expense_preview .card {
  border: 0px solid transparent !important;
  border-radius: 10px !important;
}
/* Print and edit button */

.spinner-border-sm {
  width: 1rem;
  height: 1rem;
  border-width: 0.2em;
}

.spinner-border {
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  vertical-align: text-bottom;
  border: 0.18em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  -webkit-animation: spinner-border 0.75s linear infinite;
  animation: spinner-border 0.75s linear infinite;
}

@keyframes spinner-border {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.btn.save_button {
  font-size: 14px;
  background-color: transparent !important;
  color: #377dff !important;
}

.btn.save_button:hover {
  color: #ffff !important;
  background-color: #377dff !important;
}

.btn.btn.save_button:hover .spinner-border {
  color: #ffff;
}

.print_button {
  font-size: 14px;
  color: #f12639 !important;
  background-color: transparent !important;
}

.print_button:hover {
  color: #ffff !important;
  background-color: #f12639 !important;
}

.preview_button {
  font-size: 14px;
  color: #28a745;
  background-color: transparent;
}

.preview_button:hover {
  color: #fff;
  background-color: #28a745;
}

.cursor {
  cursor: pointer;
}

.editable .btn .btn-outline-danger {
  border: 1px solid #f12639;
}

.table td {
  vertical-align: text-top;
}

.total {
  padding-right: 5rem !important;
}

#table-bottom {
  font-size: 16px !important;
}

/* Printable page */

/* #printPdf {
  display: none;
} */

#printPdf .sign p {
  font-size: 16px !important;
  color: #212529 !important;
  text-align: inherit !important;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
  font-weight: bold !important;
}

#printPdf hr {
  border-top: 1px solid rgba(0, 0, 0, 0.7) !important;
}

#printPdf .table-bordered {
  border: 1px solid rgba(0, 0, 0, 0.7) !important;
}

#printPdf .table-bordered th,
#printPdf .table-bordered td {
  border: 1px solid rgba(0, 0, 0, 0.7) !important;
}

#printPdf .d-flex > div {
  border: 1px solid rgba(0, 0, 0, 0.7) !important;
}

#printPdf .table_legenda {
  table-layout: fixed !important;
  text-align: left !important;
}

#printPdf .table_legenda th {
  word-wrap: break-word !important;
}

#printPdf .float-left {
  text-align: left !important;
}

#printPdf .float-right {
  text-align: left !important;
}

@media (min-width: 992px) {
  .modal-lg {
    max-width: 1120px !important;
  }
}
</style>