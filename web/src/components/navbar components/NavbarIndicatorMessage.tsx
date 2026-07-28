
export const NavbarIndicatorMessage = () => {

    return(
        <>
            <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
                <button id="dropdown-scrollable" type="button" className="dropdown-toggle btn btn-text btn-circle dropdown-open:bg-base-content/10 size-10 bg-secondary-content p-4" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                    <div className="indicator ">
                    <span className="indicator-item bg-error size-2 rounded-full"></span>
                    <span className="icon-[tabler--message]  text-base-300  size-5.5"></span>
                    </div>
                </button>

                <div className="dropdown-menu dropdown-open:opacity-100 hidden bg-black " role="menu" aria-orientation="vertical" aria-labelledby="dropdown-scrollable">
                    <div className="dropdown-header justify-center">
                    <h6 className="text-base-content text-base">Notifications</h6>
                    </div>
                    <div className="overflow-auto text-base-content/80 max-h-56 max-md:max-w-60">
                    <div className="dropdown-item">
                        <div className="avatar avatar-away-bottom">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
                        </div>
                        </div>
                        <div className="w-60">
                        <h6 className="truncate text-base">Charles Franklin</h6>
                        <small className="text-base-content/50 truncate">Accepted your connection</small>
                        </div>
                    </div>
                    <div className="dropdown-item">
                        <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="avatar 2" />
                        </div>
                        </div>
                        <div className="w-60">
                        <h6 className="truncate text-base">Martian added moved Charts & Maps task to the done board.</h6>
                        <small className="text-base-content/50 truncate">Today 10:00 AM</small>
                        </div>
                    </div>
                    <div className="dropdown-item">
                        <div className="avatar avatar-online-bottom">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-8.png" alt="avatar 8" />
                        </div>
                        </div>
                        <div className="w-60">
                        <h6 className="truncate text-base">New Message</h6>
                        <small className="text-base-content/50 truncate">You have new message from Natalie</small>
                        </div>
                    </div>
                    <div className="dropdown-item">
                        <div className="avatar avatar-placeholder">
                        <div className="bg-neutral text-neutral-content w-10 rounded-full p-2">
                            <span className="icon-[tabler--user] size-full"></span>
                        </div>
                        </div>
                        <div className="w-60">
                        <h6 className="truncate text-base">Application has been approved 🚀</h6>
                        <small className="text-base-content/50 text-wrap">Your ABC project application has been approved.</small>
                        </div>
                    </div>
                    <div className="dropdown-item">
                        <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-10.png" alt="avatar 10" />
                        </div>
                        </div>
                        <div className="w-60">
                        <h6 className="truncate text-base">New message from Jane</h6>
                        <small className="text-base-content/50 text-wrap">Your have new message from Jane</small>
                        </div>
                    </div>
                    <div className="dropdown-item">
                        <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-3.png" alt="avatar 3" />
                        </div>
                        </div>
                        <div className="w-60">
                        <h6 className="truncate text-base">Barry Commented on App review task.</h6>
                        <small className="text-base-content/50 truncate">Today 8:32 AM</small>
                        </div>
                    </div>
                    </div>
                    <a href="#" className="dropdown-footer justify-center gap-1">
                    <span className="icon-[tabler--eye] size-4"></span>
                    View all
                    </a>
                </div>
            </div>

        </>
    )
}