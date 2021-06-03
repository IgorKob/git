http://www.vue-tags-input.com/
https://github.com/JohMun/vue-tags-input

<template>
    <form @submit.prevent="submit">
        <div class="py-3">
            <h6 class="text-secondary">Step 1</h6>
            <p class="mb-3">Who are you requesting content from?</p>
            <!-- <b-row no-gutters> -->
                <!-- <b-col cols="10" md="11"> -->
                    <div class="d-flex align-items-center">
                        <div class="c-icon mr-2 mr-sm-3">
                            <i class="ms-icon ms-icon-user"></i>
                        </div>
                        <vue-tags-input
                            v-model="user"
                            :tags="usersArr"
                            :autocomplete-items="filteredUsers"
                            placeholder="Select user name"
                            :add-only-from-autocomplete="false"
                            @tags-changed="newTags => tagsChanged(newTags)"
                            class="w-100 tags-input c-tag-input__user"
                            :class="{
                                'e-validated__border-success': user.length || usersArr.length,
                                'e-validated__border-dangerous': (failures.user && !user.length)
                                    && (failures.user && !usersArr.length) || (!filteredUsers.length && failures.user)
                            }"
                            :autocomplete-min-length="0"
                        >
                                <div
                                    slot="autocomplete-item"
                                    slot-scope="props"
                                    class="mb-2 my-item d-flex justify-content-between align-items-center"
                                    @click="props.performAdd(props.item)"
                                    style="overflow-x: hidden;text-overflow: ellipsis"
                                >
                                    <b-avatar
                                        :src="props.item.profile_photo_url"
                                        variant="info"
                                        class="mr-2"
                                    >
                                    </b-avatar>
                                    <div class="d-flex align-items-start align-items-sm-between justify-content-between w-100 flex-column flex-sm-row">
                                        <b>{{ props.item.f_name }} {{ props.item.l_name }}</b>
                                        <div class="text-left text-sm-right">{{ props.item.title }} at {{ props.item.company_name }}</div>
                                    </div>
                                </div>
                                <div
                                    slot="tag-left"
                                    slot-scope="props"
                                    class="my-tag-left d-flex align-items-center w-100"
                                    @click="props.performOpenEdit(props.index)"
                                >
                                    <b-avatar
                                        :src="props.tag.profile_photo_url"
                                        variant="info"
                                        class="mr-2"
                                    >
                                    </b-avatar>
                                    <div class="d-flex align-items-start align-items-sm-between justify-content-between w-100 flex-column flex-sm-row" v-if="!props.tag.email">
                                        <b>{{ props.tag.text }}</b>
                                    </div>
                                    <div class="d-flex align-items-start align-items-sm-between justify-content-between w-100 flex-column flex-sm-row" v-else>
                                        <b>{{ props.tag.f_name }} {{ props.tag.l_name }}</b>
                                        <div class="text-left text-sm-right">{{ props.tag.title }} at {{ props.tag.company_name }}</div>
                                    </div>
                                </div>
                        </vue-tags-input>

                    </div>
                <!-- </b-col>
            </b-row> -->
        </div>
        <div class="py-2">
            <h6 class="text-secondary">Step 2</h6>
            <p class="mb-3">Who would you like to help you approve this content?</p>
            <!-- <b-row no-gutters>
                <b-col cols="10" md="11"> -->
                    <div class="d-flex align-items-center">
                        <div class="c-icon mr-2 mr-sm-3">
                            <i class="ms-icon ms-icon-user"></i>
                        </div>
                        <vue-tags-input
                            v-model="approver"
                            :tags="approverArr"
                            :autocomplete-items="filteredApprover"
                            @tags-changed="newTags => approverArr = newTags"
                            placeholder="Select approver"
                            :max-tags="5"
                            :add-only-from-autocomplete="true"
                            class="w-100 tags-input c-tag-input__user"
                            :class="{
                                'e-validated__border-success': approver.length || approverArr.length,
                                'e-validated__border-dangerous': (failures.approver && !approver.length)
                                  && (failures.approver && !approverArr.length)
                                  || (!filteredApprover.length && approverArr.length !== 5)
                                }"
                            :autocomplete-min-length="0"
                        >
                                <div
                                    slot="autocomplete-item"
                                    slot-scope="props"
                                    class="mb-2 my-item d-flex justify-content-between align-items-center"
                                    @click="props.performAdd(props.item)"
                                    style="overflow-x: hidden;text-overflow: ellipsis"
                                >
                                    <b-avatar
                                        :src="props.item.profile_photo_url"
                                        variant="info"
                                        class="mr-2"
                                    >
                                    </b-avatar>
                                    <div class="d-flex align-items-start align-items-sm-between justify-content-between w-100 flex-column flex-sm-row">
                                        <b>{{ props.item.f_name }} {{ props.item.l_name }}</b>
                                        <div class="text-left text-sm-right">{{ props.item.title }} at {{ props.item.company_name }}</div>
                                    </div>
                                </div>
                                <div
                                    slot="tag-left"
                                    slot-scope="props"
                                    class="my-tag-left d-flex justify-content-between align-items-center w-100"
                                    @click="props.performOpenEdit(props.index)"
                                >
                                    <b-avatar
                                        :src="props.tag.profile_photo_url"
                                        variant="info"
                                        class="mr-2"
                                    >
                                    </b-avatar>
                                    <div class="d-flex align-items-start align-items-sm-between justify-content-between w-100 flex-column flex-sm-row">
                                        <b>{{ props.tag.f_name }} {{ props.tag.l_name }}</b>
                                        <div class="text-left text-sm-right">{{ props.tag.title }} at {{ props.tag.company_name }}</div>
                                    </div>
                                </div>
                        </vue-tags-input>
                    </div>
                <!-- </b-col>
            </b-row> -->
        </div>
        <div class="py-3">
            <h6 class="text-secondary">Step 3</h6>
            <p class="mb-3">When would you like them to complete their video?</p>
            <!-- <b-row class="align-items-center" no-gutters>
                <b-col cols="10" md="11"> -->
                    <div class="d-flex align-items-center">
                        <div class="c-icon mr-2 mr-sm-3">
                            <i class="ms-icon ms-icon-calendar"></i>
                        </div>
                        <datetime
                            v-model="form.due_date"
                            title="Due date"
                            input-id="datetimei"
                            input-class="form-control"
                            class="w-100 c-datetime"
                            :class="{
                                'e-validated__border-success': form.due_date,
                                'e-validated__border-dangerous': failures.dueDate && !form.due_date,
                            }"
                            type="date"
                            format="MM/dd/yy"
                            :week-start="7"
                            :min-datetime="new Date().toISOString()"
                        >
                        </datetime>
                    </div>
                <!-- </b-col>
            </b-row> -->
        </div>
        <div class="py-2">
            <h6 class="text-secondary">Step 4</h6>
            <p class="mb-3">What would you like them to respond to?</p>
            <b-row
                class="d-flex align-items-center mb-3"
                v-for="(q, index) in form.questions" :key="index"
                no-gutters
            >
                <b-col cols="10" md="11">
                    <b-form-group :id="'input-group-'+index" :label-for="'text-'+index"
                    >
                        <b-form-input
                            :id="'text-'+index"
                            v-model="q.text"
                            placeholder="Type your question..."
                            :class="{
                              'e-validated__border-success': q.text,
                              'e-validated__border-dangerous': failures.text && !q.text
                            }"
                            trim
                        ></b-form-input>
                    </b-form-group>

                </b-col>
                <b-col cols="2" md="1" class="mb-3">
                    <div class="d-flex justify-content-center">
                        <div
                            class="c-icon icon-operand"
                            v-if="index === 0"
                            v-on:click.prevent="addNewQuestion()"
                        >
                            <i class="ms-icon ms-icon-create"></i>
                        </div>
                        <div
                            class="c-icon icon-operand"
                            v-if="index > 0"
                            v-on:click.prevent="removeQuestion(q.id)"
                        >
                            <i class="ms-icon ms-icon-minus"></i>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>

        <jet-action-message :on="sending" variant="success">
            <!-- Saved. -->
            Sent
        </jet-action-message>

        <div class="d-flex justify-content-end mt-4">
            <b-button
                variant="primary"
                :disabled="sending"
                class="c-button"
                type="submit"
            >
                <span v-if="!sending">Send Request</span>
                <b-spinner v-else />
            </b-button>
        </div>
    </form>
</template>

<script>
    import AppLayout from "@/Layouts/AppLayout";
    import { Datetime } from "vue-datetime";
    // import NavButtonGroup from "@/Shared/NavButtonGroup";
    import JetActionMessage from '@/Jetstream/ActionMessage';
    import VueTagsInput from '@johmun/vue-tags-input';
    import { emailRegEx } from "@/Shared/constants";

    export default {
        metaInfo: { title: "Request Content" },
        components: {
            AppLayout,
            Datetime,
            // NavButtonGroup,
            JetActionMessage,
            VueTagsInput,
        },
        props: {
            errors: Object,
            users: Array,
            approvers: Array,
        },
        remember: "form",
        data() {
            return {
                sending: false,
                form: {
                    assignee_id: [],
                    due_date: null,
                    approval_users: [{ id: null, profile_photo_url: "" }],
                    questions: [{ text: "", id: Math.random() }],
                    created_by: null,
                },
                buttons: [
                    { id: 1, title: "Inbox", href: "approval.queue", active: false },
                    {
                        id: 2,
                        title: "Content Requested",
                        href: "contents.requested",
                        active: false,
                    },
                    // {
                    //   id: 3,
                    //   title: "Request video from a colleague",
                    //   href: "contents.request",
                    //   disabled: true,
                    // },
                ],
                user: '',
                usersArr: [],
                autocompleteUsers: [],
                approver: '',
                approverArr: [],
                autocompleteApprover: [],
                failures: {
                    approver: false,
                    dueDate: false,
                    text: false,
                    user: false,
                },
                // dismissSecs: 3,
                // dismissCountDown: 0,
            };
        },
        methods: {
            submit() {
                this.selectData()
                if (this.checkForm()) {
                  this.$inertia.post(this.route("contents.request_store"), this.form, {
                    onStart: () => (this.sending = true),
                    onFinish: () => (this.sending = false),
                  });
                }
            },
            selectData() {
                this.form.assignee_id = this.usersArr.map((el) => el.id || el.text);
                this.form.approval_users = this.approverArr.map(el => ({id: el.id, profile_photo_url: el.profile_photo_url}));
                this.form.created_by = this.$page.props.user;
            },
            checkForm() {
                if (
                    this.form.assignee_id.length &&
                    this.form.approval_users.length &&
                    this.form.due_date &&
                    this.form.questions.length
                ) {
                    return true;
                }

                if (!this.form.assignee_id.length) {
                    this.failures.user = true
                }
                if (!this.form.approval_users.length) {
                    this.failures.approver = true
                }
                if (!this.form.due_date) {
                    this.failures.dueDate = true
                }
                if (!this.form.questions.some(el => el.text.length)) {
                    this.failures.text = true
                }

                return false;
            },
            removeQuestion(id) {
                this.form.questions = this.form.questions.filter(item => item.id !== id);
            },

            addNewQuestion() {
                this.form.questions.push({ text: '', id: Math.random() })
            },
            tagsChanged(newTags) {
                if (newTags.length === 0) {
                    return this.usersArr = newTags;
                } else if (!newTags[newTags.length-1].email && !emailRegEx.test(newTags[newTags.length-1].text)) {
                    this.user = newTags[newTags.length-1].text
                    return this.usersArr = newTags.slice(0, -1)
                } else {
                    return this.usersArr = newTags
                }
            }
        },
        computed: {
            filteredUsers() {
                if (!emailRegEx.test(this.user) && this.user.length) {
                    this.failures.user = true;
                } else {
                    this.failures.user = false;
                }

                this.autocompleteUsers = this.users.map(el => ({...el, text: `${el.f_name} ${el.l_name}`}))
                return this.autocompleteUsers.filter(i => {
                    return i.text.toLowerCase().indexOf(this.user.toLowerCase()) !== -1 ;
                });
            },
            filteredApprover() {
                this.autocompleteApprover = this.approvers.map(el => ({...el, text: `${el.f_name} ${el.l_name}`}))
                if (this.approverArr.length === 5) {
                    document.querySelector("input[placeholder='Select approver']").style.display = 'none'
                    return [];
                }
                if (this.approverArr.length === 4) {
                    document.querySelector("input[placeholder='Select approver']").style.display = 'flex'
                }
                if (this.approverArr.length !== 5) {
                    return this.autocompleteApprover.filter(i => {
                        return i.text.toLowerCase().indexOf(this.approver.toLowerCase()) !== -1;
                    });
                }
            },
        },
    };
</script>
