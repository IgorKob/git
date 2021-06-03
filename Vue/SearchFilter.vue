
1.
./index.vue
<template>
  <app-layout fullWidth>
    <div class="py-3 py-md-5">
      <b-card header-tag="header" footer-tag="footer">
        <template #header>
          <div class="d-flex align-items-center">
            <h4 class="mb-0">Users</h4>
            <inertia-link class="ml-auto" :href="route('users.create')">
              <b-button variant="primary"> Invite </b-button>
              <!-- <span>user</span> -->
            </inertia-link>
          </div>
        </template>

        <div class="c-inline-form-wrap">
          <search-filter v-model="form.search" />
        </div>

        <b-table-simple class="c-table" responsive hover>
          <b-thead head-variant="light">
            <b-tr class="text-left font-bold">
              <b-th class="align-middle">Name</b-th>
              <b-th class="align-middle">Email</b-th>
              <b-th class="align-middle">
                <b-dropdown
                  id="dropdown-form"
                  :text="
                    selected.length
                      ? `Companies (${selected.length})`
                      : 'Company'
                  "
                  ref="dropdown"
                  class="s-users__company-wrap"
                >
                  <b-dropdown-form class="p-0">
                    <b-form-input type="search" v-model="search" class="mb-3" placeholder="Search company..."></b-form-input>
                    <b-form-checkbox-group
                      id="company"
                      v-model="selected"
                      :options="filteredList"
                      name="company"
                      class="s-users__company-items"
                    ></b-form-checkbox-group>
                  </b-dropdown-form>
                </b-dropdown>
              </b-th>
              <b-th class="align-middle">Role</b-th>
              <b-th class="align-middle">Title</b-th>
              <b-th class="align-middle">Department</b-th>
              <b-th class="align-middle">Status</b-th>
              <b-th></b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="user in users.data" :key="user.id">
              <b-td class="align-bottom">
                <inertia-link
                  class="c-table__link"
                  :href="route('users.edit', user.id)"
                >
                  <b-avatar
                    variant="info"
                    :src="user.photo"
                    class="mr-2"
                    size="1.8rem"
                  ></b-avatar>
                  {{ user.f_name }} {{ user.l_name }}
                  <p
                    v-if="user.deleted_at"
                    class="ml-2 mb-0"
                    title="This user was deleted"
                  >
                    <i
                      class="ms-icon ms-icon-delete ms-icon-small text-danger d-flex"
                    ></i>
                  </p>
                </inertia-link>
              </b-td>
              <b-td>
                <inertia-link
                  class="c-table__link"
                  :href="route('users.edit', user.id)"
                  tabindex="-1"
                >
                  {{ user.email }}
                </inertia-link>
              </b-td>
              <b-td>
                <inertia-link
                  class="c-table__link"
                  :href="route('users.edit', user.id)"
                  tabindex="-1"
                >
                  {{ user.company_name }}
                </inertia-link>
              </b-td>
              <b-td>
                {{ user.role_name }}
              </b-td>
              <b-td>
                <inertia-link
                  class="c-table__link"
                  :href="route('users.edit', user.id)"
                  tabindex="-1"
                >
                  {{ user.title }}
                </inertia-link>
              </b-td>
              <b-td>
                <inertia-link
                  class="c-table__link"
                  :href="route('users.edit', user.id)"
                  tabindex="-1"
                >
                  {{ user.department }}
                </inertia-link>
              </b-td>
              <b-td>
                <b-badge
                  v-if="isCoincide(user.status_name, 'invited')"
                  variant="success"
                >
                  {{ user.status_name }}
                </b-badge>
                <b-badge
                  v-else-if="isCoincide(user.status_name, 'active')"
                  variant="primary"
                >
                  {{ user.status_name }}
                </b-badge>
                <b-badge
                  v-else-if="isCoincide(user.status_name, 'notinvited')"
                  variant="danger"
                >
                  {{ user.status_name }}
                </b-badge>
                <b-badge v-else>
                  {{ user.status_name }}
                </b-badge>
              </b-td>
              <b-td class="d-flex text-right">
                <inertia-link
                  class="c-table__link mr-2"
                  :href="route('users.edit', user.id)"
                  tabindex="-1"
                >
                  <b-button variant="light">
                    <i class="ms-icon ms-icon-pencil ms-icon-small d-flex"></i>
                  </b-button>
                </inertia-link>
                <b-button
                  v-on:click="askConfirmation(user.id)"
                  class="mr-2 text-danger"
                  variant="light"
                >
                  <i class="ms-icon ms-icon-delete ms-icon-small d-flex"></i>
                </b-button>
                <b-button
                  v-if="!user.active"
                  v-on:click="toggleUser(user.id)"
                  class="text-secondary"
                  variant="light"
                >
                  <i
                    class="ms-icon ms-icon-eye-off ms-icon-small d-flex"
                    title="Activate"
                  ></i>
                </b-button>
                <b-button
                  v-on:click="toggleUser(user.id)"
                  v-else
                  class="text-primary"
                  variant="light"
                >
                  <i
                    class="ms-icon ms-icon-eye-on ms-icon-small d-flex"
                    title="Deactivate"
                  ></i>
                </b-button>
              </b-td>
            </b-tr>
            <b-tr v-if="users.data.length === 0">
              <b-td colspan="8">No users found.</b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
        <template v-if="users.last_page > 1" #footer>
          <pagination :links="users.links" />
        </template>
      </b-card>
      <v-dialog />
    </div>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import Icon from "@/Shared/Icon";
import mapValues from "lodash/mapValues";
import Pagination from "@/Shared/Pagination";
import pickBy from "lodash/pickBy";
import SearchFilter from "@/Shared/SearchFilter";
import throttle from "lodash/throttle";

export default {
  metaInfo: { title: "Users" },
  components: {
    AppLayout,
    Icon,
    Pagination,
    SearchFilter,
  },
  props: {
    users: Object,
    filters: Object,
    companies: Array,
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed,
      },
      search: '',
      selected: [],
      options: [],
    };
  },
  watch: {
    form: {
      handler: throttle(function () {
        let query = pickBy(this.form);
        query.company = this.selected;
        this.$inertia.replace(
          this.route(
            "users",
            Object.keys(query).length ? query : { remember: "forget" }
          )
        );
      }, 150),
      deep: true,
    },
    selected: {
      handler: throttle(function () {
        let query = pickBy(this.form);
        query.company = this.selected;
        this.$inertia.replace(
          this.route(
            "users",
            Object.keys(query).length ? query : { remember: "forget" }
          )
        );
      }, 150),
      deep: true,
    },
  },
  methods: {
    askConfirmation: function (id) {
      this.$modal.show("dialog", {
        title: "Confirm action",
        text: "Are you sure to delete this user?",
        buttons: [
          {
            title: "No, Cancel",
            handler: () => {
              this.$modal.hide("dialog");
            },
          },
          {
            title: "Yes, Delete",
            handler: () => {
              this.$modal.hide("dialog");
              this.$inertia.delete(route("users.destroy", id));
            },
          },
        ],
      });
    },
    toggleUser: function (id) {
      this.$inertia.post(this.route("users.update", id), {
        active: "toggle",
        _method: "put",
      });
    },
    isCoincide: function (compareA, compareB) {
      return compareA.toLowerCase() === compareB;
    },
  },
  created: function () {
    this.options = this.companies.map((el) => ({
      text: el.name,
      value: el.id,
    }));
  },
  computed: {
    filteredList() {
      return this.options.filter(el => {
        return el.text.toLowerCase().includes(this.search.toLowerCase());
      })
    }
  }
};
</script>



./Shared/SearchFilter.vue
<template>
  <div class="c-search-filter">
    <input
      class="form-control"
      autocomplete="off"
      type="search"
      name="search"
      placeholder="Search…"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
import Dropdown from "@/Shared/Dropdown";

export default {
  components: {
    Dropdown,
  },
  props: {
    value: String,
    maxWidth: {
      type: Number,
      default: 300,
    },
  },
};
</script>
