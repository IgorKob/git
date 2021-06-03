<b-modal ref="confirming-logout-modal" hide-header hide-footer title="Confirm action">
    <div class="d-block text-center">
        <h6>Logout Other Browser Sessions</h6>
        <p>Please enter your password to confirm you would like to logout of your other browser sessions across all of your devices.</p>

        <div class="mt-4">
            <b-form-group id="input-group-password" label-for="password"
                :invalid-feedback="form.errors.password"
                :state="passwordState"
            >
                <b-form-input
                    id="password"
                    type="password"
                    ref="password"
                    v-model="form.password"
                    placeholder="Password"
                    :state="passwordState"
                    trim
                    @keyup.enter.native="logoutOtherBrowserSessions"
                ></b-form-input>
            </b-form-group>

        </div>
    </div>
    <div class="d-flex flex-column flex-sm-row justify-content-end  mt-4">
        <b-button
            variant="secondary"
            class="mr-0 mr-sm-2 mb-2 mb-sm-0"
            @click="closeModal"
        >Nevermind</b-button>
        <b-button
            variant="danger"
            @click="logoutOtherBrowserSessions"
            :disabled="form.processing"
        >Logout Other Browser Sessions</b-button>
    </div>
</b-modal>
