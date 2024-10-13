import { AuthButtons } from "./authbuttons"
import { UserCart } from "./cart"
import { AppLogo } from "./logo"
import { SearchProductFilter } from "./search"
import { Categories } from "./categories"

export const MainHeader = () => {
    return (
        <>
            <header className="index_header">
                <AppLogo />
                <SearchProductFilter />
                <Categories />
                <AuthButtons />
                <UserCart />
            </header>
        </>
    )
}
