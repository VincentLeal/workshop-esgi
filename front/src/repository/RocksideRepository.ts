import { HTTP } from '@/services/Service';

export class RocksideRepository {
    public static getInstance() {
        if (!RocksideRepository.instance) {
            RocksideRepository.instance = new RocksideRepository();
        }
        const storedIdentity = localStorage.getItem('identity');
        if (storedIdentity === null) {
            RocksideRepository.instance.identity = '';
        } else {
            RocksideRepository.instance.identity = storedIdentity;
        }
        return RocksideRepository.instance;
    }

    private static instance: RocksideRepository;

    public identity = '';

    public async createIdentity(): Promise<string> {
        const response = await HTTP.post('/identities');

        this.identity = response.data.address;
        return this.identity;
    }

    public async transaction(to: string, value: string, data: string): Promise<string> {
        const response = await HTTP.post('/transaction', {
            from: this.identity,
            to: to,
        });

        return response.data.transaction_hash;
    }

    public async transfer(to: string, amount: string): Promise<string> {
        const response = await HTTP.post('/transfer', {
            from: this.identity,
            erc20: process.env.VUE_APP_ERC20_ADDRESS,
            to: to,
            amount: amount,
        });

        return response.data.transaction_hash;
    }

    public async balanceOf(): Promise<string> {
        const response = await HTTP.post('/balanceOf', {
            from: this.identity,
            erc20: process.env.VUE_APP_ERC20_ADDRESS,
        });

        return response.data.amount;
    }

    public async balance(): Promise<string> {
        const response = await HTTP.post('/balance', {
            from: this.identity,
        });

        return response.data.amount;
    }

    public async getWinner(): Promise<string> {
        const response = await HTTP.post('/getWinner', {
            flag: process.env.VUE_APP_FLAG_ADDRESS,
        });

        return response.data.winner;
    }

    public async capture(): Promise<string> {
        const response = await HTTP.post('/capture', {
            from: this.identity,
            flag: process.env.VUE_APP_FLAG_ADDRESS,
        });

        return response.data.transaction_hash;
    }
}
