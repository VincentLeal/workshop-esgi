import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Credential extends Vue {
    @Prop({ required: true })
    public text!: string;

    public onCopy() {
        this.$toasted.global.info({ message: '👍🏼 Key copied!' });
    }

    public onError() {
        this.$toasted.global.error({ message: 'Failed to copy key' });
    }
}
