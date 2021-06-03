
./AppLayout.vue
<template>
    <div class="o-app-layout">
        <div class="o-app-layout__diagonal-box"></div>
        <jet-navbar></jet-navbar>

        <div class="o-app-layout__content">
            <b-container :fluid="fullWidth">
                <slot></slot>
            </b-container>

            <jet-footer></jet-footer>
        </div>

        <portal-target name="modal" multiple>
        </portal-target>
    </div>
</template>

<script>
    import JetNavbar from '@/Shared/Navbar'
    import JetFooter from '@/Shared/Footer'
    import JetDropdown from '@/Jetstream/Dropdown'
    import JetDropdownLink from '@/Jetstream/DropdownLink'
    import JetNavLink from '@/Jetstream/NavLink'
    import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink'
    import HeaderIcon from '@/Shared/HeaderIcon'

    export default {
        components: {
            JetDropdown,
            JetDropdownLink,
            JetNavLink,
            JetResponsiveNavLink,
            HeaderIcon,
            JetNavbar,
            JetFooter
        },

        data() {
            return {
                showingNavigationDropdown: false,
                showGreenDot: false,
                checkInterval: false
            }
        },
        props: {
            fullWidth: Boolean
        },
        methods: {
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },

            logout() {
                axios.post(route('logout').url()).then(response => {
                    window.location = '/login';
                })
            },

            checkQueue() {
                axios.get(route('user.stats')).then(response => {
                    if(response.data.q) {
                        this.showGreenDot = true;
                    } else {
                        this.showGreenDot = false;
                    }
                })
            }
        },
        mounted() {
            this.checkQueue();
            if(!this.checkInterval) {
                this.checkInterval = setInterval(this.checkQueue, 60000);
            }
        },
        beforeDestroy() {
            clearInterval(this.checkInterval);
        },
        computed: {
            mediaActive() {
                return this.$page.url == route('media_list');
            },
            notifyActive() {
                return this.$page.url == route('approval.queue');
            },
            usersActive() {
                return this.$page.url == route('users.create');
            }
        }
    }
</script>
