<template>
    <b-card
        :id="'item'+cardId"
        class="c-media-card shadow-none"
        header-tag="header"
        footer-tag="footer"
        header-class="c-media-card__header"
        footer-class="px-3"
        no-body
    >
        <template #header>
            <div class="c-media-card__header-inner">
                <div class="c-media-card__header-user-info">
                    <b-avatar
                        :src="userPhoto"
                        variant="info"
                        class="c-media-card__header-avatar"
                    >
                    </b-avatar>
                    <div>
                        <p v-show="userName" class="font-weight-bold mb-0">{{ userName }}</p>
                        <p v-if ="showUserTitle && userTitle" class="text-muted small mb-0">{{ userTitle }}</p>
                        <!-- <p class="font-weight-bold mb-0">by {{ item.user_info.name }} from {{ item.user_info.company }}</p> -->
                        <p v-show="createdAt" class="text-muted small mb-0">{{ getHumanDate(createdAt) }}</p>
                    </div>
                </div>

                <div class="d-flex align-items-center mb-2">
                    <slot></slot>
                </div>
            </div>
        </template>

        <!-- <b-embed
            :src="videoUrl"
            type="video"
            frameborder="0"
            allowfullscreen
            controls
            muted="true"
            oncanplay="this.muted=true"
            autoplay
        ></b-embed> -->

        <video-player :videoRef="'video'+cardId"  :options="videoOptions"/>

        <template #footer>
            <LikeCommentCounter :card-id="cardId"
                                :likes-count="likesCount"
                                :comments-count="commentsCount"
            />
            <Comments :id="cardId"
                      :likesCount="likesCount"
                      :liked="liked"
                      :count="commentsCount"
            />
        </template>
    </b-card>
</template>

<script>
    import moment from 'moment';
    import LikeButton from '@/Shared/LikeButton';
    import CommentButton from '@/Shared/CommentButton';
    import Comments from './Comments.vue';
    import LikeCommentCounter from "@/Shared/LikeCommentCounter";
    import VideoPlayer from "@/Shared/VideoPlayer.vue";
    import { log } from '@opentok/client';

    export default {
        components: {
            LikeCommentCounter,
            LikeButton,
            CommentButton,
            Comments,
            VideoPlayer,
        },
        props: {
            item: Object,
            cardId: Number,
            videoUrl: String,
            userPhoto: String,
            userName: String,
            userTitle: String,
            createdAt: String,
            likesCount: Number,
            commentsCount: Number,
            liked: Number,
            status: String,
            showUserTitle: Boolean,
            showDownloadBtn: Boolean,
            commentsVisible: Boolean
        },
        data() {
            return {
                videoOptions: {
                    muted: true,
                    autoplay: true,
                    playsinline: true,
                    controls: true,
                    sources: [
                        {
                            src: this.videoUrl,
                            type: "video/mp4"
                        },
                        {
                            src: this.videoUrl,
                            type: "video/webm"
                        },
                        {
                            src: this.videoUrl,
                            type: "video/ogg"
                        },
                        {
                            src: this.videoUrl,
                            type: "video/youtube"
                        },
                    ]
                }
            };
        },
        mounted () {
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                let videoEl = document.querySelectorAll('video[autoplay]');

                if (videoEl.length > 0) {
                    for (let i = 0; i < videoEl.length; i++) {
                        let windowHeight = window.innerHeight;
                        let thisVideoEl = videoEl[i];
                        let videoHeight = thisVideoEl.clientHeight;
                        let videoClientRect = thisVideoEl.getBoundingClientRect().top;

                        if ( videoClientRect <= ( windowHeight - videoHeight )
                            && videoClientRect >= ( 0 - ( videoHeight*.1 ) )
                        ) {
                            thisVideoEl.play();
                            this.unmuteVideo(thisVideoEl);
                        } else {
                            thisVideoEl.pause();
                        }
                    }
                }
            },
            // handleScroll() {
            //     const playingVideos = document.querySelectorAll('.vjs-playing video');
            //     // let videoEl = document.querySelectorAll('video[autoplay]');
            //     if (playingVideos.length > 0) {
            //         for (let i = 0; i < playingVideos.length; i++) {
            //             let windowHeight = window.innerHeight;
            //             let thisVideoEl = playingVideos[i];
            //             let videoHeight = thisVideoEl.clientHeight;
            //             let videoClientRect = thisVideoEl.getBoundingClientRect().top;
            //
            //             if ( videoClientRect <= ( windowHeight - videoHeight )
            //                 && videoClientRect >= ( 0 - ( videoHeight*.1 ) )
            //             ) {
            //                 thisVideoEl.play();
            //                 this.unmuteVideo(thisVideoEl);
            //             } else {
            //                 thisVideoEl.pause();
            //             }
            //         }
            //     }
            // },
            unmuteVideo(videoEl) {
                videoEl.muted = false;
                videoEl.removeAttribute('muted');
            }
        },
    }
</script>
