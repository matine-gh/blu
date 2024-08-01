import Icons from "../../../../public/Icons";
import {useRouter} from "next/navigation";


export default function ConfirmPurchase() {

    const router = useRouter();

    return (
        <div
            className={"bg-secondary-17 bg-opacity-40 fixed inset-0 w-full h-full z-50"}>
            <div
                className={"bg-success-01 right-0 rounded-2xl z-2 max-w-112 m-auto shadow-lg absolute inset-0 h-fit pb-14 pt-8 text-center max-w-lg md:w-1/2 max-md:w-11/12"}>
                <div className={'container'+' '+'text-success-10 text-center space-y-8'}>
                    <div className={'w-fit mx-auto'}>
                        <Icons name={'success'} width={'72'} height={'72'}/>
                    </div>
                    <p>درخواست تسهیلات شما با موفقیت ثبت شد.</p>
                    <button className={'primary-button'+' '+'min-w-32'}
                            onClick={()=>router.replace('/history')}>
                        مشاهده تاریخچه
                    </button>
                </div>
            </div>
        </div>
    );
}