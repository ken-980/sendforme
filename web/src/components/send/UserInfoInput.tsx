

export const UserInfoSelect = () => {

    return(
        <>
            <div className="flex justify-center gap-4 w-full p-4">
                <div className="w-96">
                    <label className="label-text font-poppins text-base-200" htmlFor="defaultInput">Full name</label>
                    <input type="text" placeholder="John Doe" className="input placeholder:text-base-content bg-white outline text-primary" id="defaultInput" />
                    <span className="helper-text text-base-200">Please enter receiver's account full name </span>

                </div>

                <div className="w-96">
                    <label className="label-text font-poppins text-base-100" htmlFor="defaultInputEmail">Email</label>
                    <input type="text" placeholder="doe@gmail.com" className="input placeholder:text-base-content bg-white outline text-primary" id="defaultInputEmail" />
                    <span className="helper-text text-base-200">Please enter receiver's account email </span>

                </div>

                <div className="w-96">
                    <label className="label-text font-poppins text-base-100" htmlFor="defaultInputPhone">Phone or tag</label>
                    <input type="text" placeholder="+14897878 or @johndoe" className="input placeholder:text-base-content bg-white outline text-primary" id="defaultInputPhone" />
                    <span className="helper-text text-base-200">Please enter receiver's account tag or phone number for the service choosen </span>

                </div>


            </div>
        </>
    )
}