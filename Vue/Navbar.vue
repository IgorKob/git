<template>
    <b-navbar toggleable="md" class="c-navbar" id="c-navbar" fixed="top">
        <b-container>
            <b-navbar-brand>
                <inertia-link :href="route('dashboard')">
                    <jet-application-mark class="c-navbar__logo" />
                </inertia-link>
            </b-navbar-brand>
            <b-navbar-nav class="c-navbar__list-icons" title="Media">
                <b-nav-text class="c-navbar__icon">
                    <inertia-link :href="route('media_list')" :class="getActiveClassByUrl('media_list')">
                        <i class="ms-icon ms-icon-video-player"></i>
                    </inertia-link>
                </b-nav-text>
                <b-nav-text class="c-navbar__icon" title="Approval queue">
                    <inertia-link
                        :href="route('approval.queue')"
                        :class="getActiveClassByUrl('approval.queue')"
                    >
                        <i class="ms-icon ms-icon-bell"></i>
                    </inertia-link>
                </b-nav-text>
                <b-nav-text
                    v-if="isAdminOrSuperAdmin($page.props.user.role_id)"
                    class="c-navbar__icon" title="Add user"
                >
                    <inertia-link
                        :href="route('users.create')"
                        :class="getActiveClassByUrl('users.create')"
                    >
                        <i class="ms-icon ms-icon-person-plus"></i>
                    </inertia-link>
                </b-nav-text>
            </b-navbar-nav>

<!--            <div class="c-navbar-icon c-navbar__help-btn" v-if="route().current('podcasting')">?</div>-->

            <b-navbar-toggle id="mobile-btn" class="c-navbar__mobile-btn" target="nav-collapse"></b-navbar-toggle>

            <b-collapse
                :class="{ 'podcast-position': route().current('podcasting') }"
                class="c-navbar__list-wrap flex-grow-0"
                id="nav-collapse"
                is-nav
            >
                <b-navbar-nav class="c-navbar__list">
                    <b-nav-item-dropdown right>

                        <template #button-content v-if="$page.props.jetstream.managesProfilePhotos">
                            <div class="c-navbar__avatar">
                                <b-avatar :src="$page.props.user.profile_photo_url" :text="$page.props.user.name"></b-avatar>
                                <div class="d-md-none ml-3">
                                    <div>{{ $page.props.user.name }}</div>
                                    <div>{{ $page.props.user.email }}</div>
                                </div>
                            </div>
                        </template>

                        <b-dropdown-text>
                            <inertia-link
                                class="c-navbar__item"
                                :href="route('contents.request')"
                                :class="getActiveClassByUrl('contents.request', 'u-active-color')"
                            >Request Content</inertia-link>
                        </b-dropdown-text>

                        <b-dropdown-text v-if="$page.props.user.role_id > 1">
                            <inertia-link
                                class="c-navbar__item"
                                :href="route('contents.requested')"
                                :class="getActiveClassByUrl('contents.requested', 'u-active-color')"
                            >Content Requested</inertia-link>
                        </b-dropdown-text>

                        <b-dropdown-header id="dropdown-header-label">Manage Account</b-dropdown-header>

                        <b-dropdown-text>
                            <inertia-link
                                class="c-navbar__item"
                                :href="route('profile.show')"
                                :class="getActiveClassByUrl('profile.show', 'u-active-color')"
                            >Profile</inertia-link>
                        </b-dropdown-text>

                        <template v-if="$page.props.user.role_id > 1 && $page.props.user.role_id < 4">
                            <b-dropdown-header id="dropdown-header-label-2">Admin Actions</b-dropdown-header>
                            <b-dropdown-text v-if="isSuperAdmin($page.props.user.role_id)">
                                <inertia-link
                                    class="c-navbar__item"
                                    :href="route('companies')"
                                    :class="getActiveClassByUrl('companies', 'u-active-color')"
                                >Companies</inertia-link>
                            </b-dropdown-text>
                            <b-dropdown-text>
                                <inertia-link
                                    class="c-navbar__item"
                                    :class="getActiveClassByUrl('users', 'u-active-color')"
                                    :href="route('users')"
                                >Users</inertia-link>
                            </b-dropdown-text>
                            <b-dropdown-text>
                                <inertia-link
                                    class="c-navbar__item"
                                    :class="getActiveClassByUrl('gallery_items', 'u-active-color')"
                                    :href="route('gallery_items')"
                                >Gallery Items</inertia-link>
                            </b-dropdown-text>
                            <b-dropdown-text v-if="isSuperAdmin($page.props.user.role_id)">
                                <inertia-link
                                    class="c-navbar__item"
                                    :class="getActiveClassByUrl('events', 'u-active-color')"
                                    :href="route('events')"
                                >Events</inertia-link>
                            </b-dropdown-text>
                        </template>

                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item class='c-navbar__logout' @click="logout">Logout</b-dropdown-item>

                    </b-nav-item-dropdown>

                </b-navbar-nav>
            </b-collapse>

            <div class="c-navbar-icon c-navbar__help-btn" v-if="route().current('podcasting')">?</div>
        </b-container>
    </b-navbar>
</template>

<script>
    import JetApplicationMark from '@/Jetstream/ApplicationMark'

    export default {
        components: {
            JetApplicationMark,
        },
        // data() {
        //     return {

        //     }
        // },

        methods: {
            logout() {
                // TODO: Need to make sure it's ok for laravel
                axios.post(route('logout').url()).then(response => {
                    window.location = '/login';
                })
            },

            getActiveClassByUrl: (url, activeClassName = 'u-active') => ({
                [activeClassName]: route().current(url)
            }),
        },
        mounted() {

            this.$nextTick(function() {
                let navbar = document.getElementById("c-navbar");

                window.addEventListener("scroll", function() {
                    if (document.documentElement.scrollTop >= 5) {
                        navbar.classList.add("c-navbar__bg");
                    }
                    else {
                        navbar.classList.remove("c-navbar__bg");
                    }

                });
            });
        },
    }
</script>


./_components.navbar.scss
.c-navbar {

}

.c-navbar__bg {
    background: linear-gradient(to right, #0D6FE1 0%, #0E4587 90%, #0E5FBD 100%);
    .c-navbar__icon.navbar-text a {
        color: palette(light);
    }
}

.c-navbar__logo {
    max-width: 286px;
}

.c-navbar__list-icons {
    display: flex;
    flex-direction: row;
    margin-left: auto;
}

.c-navbar__icon {
    display: flex;
    align-items: center;
    margin-right: .4rem;
}

.c-navbar__icon.navbar-text a, .c-navbar__icon.navbar-text a.u-active {
    padding: 0 10px;
    padding-top: 8px;
    background: rgba(0,0,0,.1);
    color: palette(light);
    border-radius: 3px;
    text-decoration: none;
    transition: all 0.3s;
}

.c-navbar__icon a:not(.c-navbar__icon a.u-active):hover {
    background: rgba(0,0,0,.35);
    color: palette(secondary);
}

.c-navbar__mobile-btn {
    border: none;

    .navbar-toggler-icon {
        background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255,255,255,1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='3' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
}

.c-navbar__list {
    .dropdown-toggle::after {
        content: none;
    }

    .dropdown-toggle {
        outline: none;
    }
}

.c-navbar__item {
    color: $_color-text;
    font-size: 0.875rem;
    text-decoration: none;
    white-space: nowrap;
    padding: 0.5rem 1.5rem;
    display: flex;

    &:hover {
        color: $_color-text;
        background-color: palette(accent);
        text-decoration: none;
    }
}

.c-navbar__help-btn {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 3px;
    width: 40px;
    height: 35px;
    color: palette(light);
    cursor: pointer;
}

.c-navbar__list .b-dropdown-text {
    padding: 0rem 0rem;
}

.c-navbar__avatar {
    display: flex;
    align-items: center;
}

.dropdown-header {
    color: palette(text);
}

.c-navbar__logout .dropdown-item {
    color: $_color-text;
    font-size: 0.875rem;
    padding: 0.5rem 1.5rem;
}

@media (min-width: 320px) {
    .c-navbar__help-btn {
        top: 89px;
        right: 13px;
        transform: none;
        background-color: palette(primary, 200);
    }
}

@media (min-width: 700px) {
    .podcast-position {
        margin-right: 30px;
    }
    .c-navbar__help-btn {
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        background-color: rgba(0, 0, 0, 0.1);
    }
}

@media (min-width: 1200px) {
    .c-navbar__list-wrap {
        margin-right: 20px;
    }

    .c-navbar__help-btn {
        right: 15px;
    }
}

@media (max-width: 767px) {
    .c-navbar__list-wrap {
        background-color: palette(light);
        box-shadow: 0px 10px 24px 10px rgba(0,0,0,.6);
        margin-bottom: 1rem;
    }
}

@include media-breakpoint-down(sm) {
    .c-navbar {
        padding: 0;
        white-space: nowrap;

        .dropdown-menu {
            display: block;
            background: transparent;
            border: none;
        }
    }

    .navbar-brand {
        margin-right: 0;
    }

    .c-navbar__logo {
        max-width: 140px;
    }

    .c-navbar__icon {
        margin-right: .25rem;
        i::before {
            font-size: 22px;
        }
    }

    .c-navbar__mobile-btn {
        padding-left: .25rem;
        padding-right: .25rem;
    }

    .c-navbar__avatar {
        margin-left: 1.5rem;
    }
}

@media (max-width: 576px) {
    .c-navbar__list-wrap {
        margin-bottom: 0rem;
    }
}
