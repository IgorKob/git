
// 1.
<template>
    <div>
        <b-button
            class="c-media-card__decline text-secondary"
            variant="light"
            title="Decline Podcast"
            @click="onDeleteInvitation(invitation.id, invitation.model_type)"
        >
            <i class="ms-icon ms-icon-fail-circle ms-icon-small d-flex"></i>
        </b-button>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        props: {
            invitation: Object,
            onDeleteInvitation: {
                type: Function,
                args: ['id', 'mediaType'],
            },
            limitJoinedImgs: Number,
            calendars: Array,
        },
    }
</script>

// 11.
<template>
  <app-layout>
     <template v-for="item in items">
         <PodcastInvitationCard
             :key="'podcast-invite-' + item.id"
             v-if="item.model_type === 'Podcasting'"
             :invitation="item"
             :onDeleteInvitation="onHidePodcastInvite"
             :limitJoinedImgs="3"
         />
     </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";

export default {
    components: {
        AppLayout,
    },
    props: {
        items: Array
    },
    methods: {
        onHidePodcastInvite(id, mediaType) {
            this.items = this.getFilteredItems(this.items, id, mediaType);
        },

        getFilteredItems(items, id, mediaType) {
            if (items && id && mediaType) {
                return items.filter(item => item.id !== id && mediaType !== item.model_type);
            }
            else {
                console.log('you are not passed arguments to the onFilterItems func!');
            }
        },
    },
};
</script>
