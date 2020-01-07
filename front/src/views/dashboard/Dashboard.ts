import { Component, Vue } from 'vue-property-decorator';
import { RocksideRepository } from '@/repository/RocksideRepository';
import { ServiceError } from '@/services/ServiceError';
import Credential from '@/components/credential/Credential';

@Component({
    components: {
        Credential,
    },
})
export default class Dashboard extends Vue {
    public serviceError: ServiceError = new ServiceError();
    private rocksideRepository = RocksideRepository.getInstance();

    private identity: string = '';
    private balance: string = '';

    private value: string = '';
    private to: string = '';
    private data: string = '';
    private txHashes: string[] = [];

    private erc20address: string = process.env.VUE_APP_ERC20_ADDRESS;
    private erc20balance: string = '';
    private erc20To: string = '';
    private erc20Amount: string = '';
    private ercTxHashes: string[] = [];

    private flagAddress: string = process.env.VUE_APP_FLAG_ADDRESS;
    private winner: string = '';
    private flagTxHashes: string[] = [];

    public async created() {
        this.identity = this.rocksideRepository.identity;
        this.erc20balance = await this.rocksideRepository.balanceOf();
        this.balance = await this.rocksideRepository.balance();
        this.winner = await this.rocksideRepository.getWinner();
        setInterval(async () => {
            this.erc20balance = await this.rocksideRepository.balanceOf();
            this.balance = await this.rocksideRepository.balance();
            this.winner = await this.rocksideRepository.getWinner();
        }, 1000);
    }

    public async send() {
        const txhash = await this.rocksideRepository.transaction(this.to, this.value, this.data);
        this.txHashes.push(txhash);
    }

    public async transfer() {
        const txhash = await this.rocksideRepository.transfer(this.erc20To, this.erc20Amount);
        this.ercTxHashes.push(txhash);
    }

    public async capture() {
        const txhash = await this.rocksideRepository.capture();
        this.flagTxHashes.push(txhash);
    }
}
