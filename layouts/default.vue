<template>

    <div class="min-h-screen">
        <!-- Navbar -->
        <div class="navbar bg-primary-200 shadow-sm absolute top-0">
            <div class="flex-none">
                <button class="btn btn-square btn-ghost hover:bg-transparent">
                    <Icon name="uil:bars" size="24px" />
                </button>
            </div>
        </div>

        <div>
            <!--  Main Content -->
            <slot />
        </div>
    </div>
</template>