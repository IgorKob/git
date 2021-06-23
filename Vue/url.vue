
mediaView(event) {
    // event.preventDefault()
    // event.stopPropagation();
    // let url = window.location.origin + '/media/' + this.cardId + '/view'
    // window.location.replace(this.getLinkToCopy(this.model_type, this.cardId));
    // window.location.replace(window.location.origin + '/media/' + this.cardId + '/view');
    // this.$inertia.replace(window.location.origin + '/media/' + this.cardId + '/view')

    // if для того щоб відкинути кліки по дочірнім елементам які є тегом <а> і <і>
    if (e.target.tagName !== 'A' && e.target.tagName !== 'I') {
        this.$inertia.get(window.location.origin + '/media/' + this.cardId + '/view')
    }
}
