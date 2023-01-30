import { v4 as uuidV4 } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("categories")
class Specification {
    @PrimaryColumn()
    id?: string;
    @Column()
    name : string;
    @Column()
    description: string;
    @CreateDateColumn()
    created_ad: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}
export { Specification };