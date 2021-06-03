<template>
    <app-layout>
        <div class="c-timer">
            <div class="bg-light p-2 py-4 shadow" :style="{ borderRadius: '15px' }" v-if="show">
                <h4 class="text-center mb-5">Your podcast starts in</h4>
                <div class="d-flex">
                    <div class="c-timer__item"  v-if="days">
                        <div class="c-timer__text">Days</div>
                        <div class="d-flex">
                            <div class="c-timer__number" v-for="(day, index) in daysArr" :key="index">{{ day }}</div>
                        </div>
                    </div>
                    <div class="c-timer__dots" v-if="days">:</div>
                    <div class="c-timer__item">
                        <div class="c-timer__text">Hours</div>
                        <div class="d-flex">
                            <div class="c-timer__number">{{ hoursLeftSide }}</div>
                            <div class="c-timer__number">{{ hoursRightSide }}</div>
                        </div>
                    </div>
                    <div class="c-timer__dots">:</div>
                    <div class="c-timer__item">
                        <div class="c-timer__text">Minutes</div>
                        <div class="d-flex">
                            <div class="c-timer__number">{{ minutesLeftSide }}</div>
                            <div class="c-timer__number">{{ minutesRightSide }}</div>
                        </div>
                    </div>
                    <div class="c-timer__dots">:</div>
                    <div class="c-timer__item">
                        <div class="c-timer__text">Seconds</div>
                        <div class="d-flex">
                            <div class="c-timer__number">{{ secondsLeftSide }}</div>
                            <div class="c-timer__number">{{ secondsRightSide }}</div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center">
                    <b-button class="mt-5" variant="primary">Add to calendar</b-button>
                </div>
            </div>

            <div v-if="!show">
                <no-items-notification
                    :images-array="['/img/no-items/microphone.png', '/img/no-items/smiley.png']"
                    message="Podcast completed"
                    btn-message="Go to My Media"
                    btn-route="media_list"
                    size="90px"
                ></no-items-notification>
            </div>

        </div>
    </app-layout>
</template>

<script>
    import AppLayout from '@/Layouts/AppLayout'
    import NoItemsNotification from "@/Shared/NoItemsNotification";

    export default {
        components: {
            AppLayout,
            NoItemsNotification,
        },
        props: {
            time: String
        },
        data() {
            return {
                days: 0,
                daysArr: [],
                hours: 0,
                hoursLeftSide: '',
                hoursRightSide: '',
                minutes: 0,
                minutesLeftSide: '',
                minutesRightSide: '',
                seconds: 0,
                secondsLeftSide: '',
                secondsRightSide: '',
                show: false,
                interval: null,
            };
        },
        methods: {
            timer() {
                let countDownDate = new Date(this.time).getTime();
                let now = new Date().getTime();
                this.show = countDownDate > now;
                let distance = countDownDate - now;

                if (distance > 0) {
                    const timerData = this.getTimerDataByDistance(distance);

                    this.updateTimer(timerData);
                }

                if (distance <= 0) {
                    this.resetTimer();
                }

                this.daysArr = String(this.days).split('');

                this.updateParticleTime(this.hours, 'hoursLeftSide', 'hoursRightSide');
                this.updateParticleTime(this.minutes, 'minutesLeftSide', 'minutesRightSide');
                this.updateParticleTime(this.seconds, 'secondsLeftSide', 'secondsRightSide');
            },

            getTimerDataByDistance(distance) {
                if (distance) {
                    return {
                        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((distance % (1000 * 60)) / 1000)
                    }
                }

                return null;
            },

            updateTimer(obj) {
                this.days = obj.days;
                this.hours = obj.hours;
                this.minutes = obj.minutes;
                this.seconds = obj.seconds;
            },

            resetTimer() {
                this.days = 0;
                this.hours = 0;
                this.minutes = 0;
                this.seconds = 0;
            },

            updateParticleTime(particle, particleLeftField, particleRightField) {
                if (String(particle).length > 1) {
                    this[particleLeftField] = String(particle)[0];
                    this[particleRightField] = String(particle)[1];
                }

                if (String(particle).length < 2) {
                    this[particleLeftField] = '0';
                    this[particleRightField] = String(particle)[0];
                }
            }
        },
        mounted () {
            this.timer();
            this.interval = setInterval(this.timer, 1000);
        },

        beforeDestroy () {
            clearInterval(this.interval);
        },
    }
</script>
