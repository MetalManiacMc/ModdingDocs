import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const o="/ModdingDocs/images/game_mode.png",t={},p=e('<h1 id="game-configuration" tabindex="-1"><a class="header-anchor" href="#game-configuration" aria-hidden="true">#</a> Game Configuration</h1><p>Now that Legends registers your mod, it&#39;s time for you to be able to test it.</p><h2 id="gamelayer" tabindex="-1"><a class="header-anchor" href="#gamelayer" aria-hidden="true">#</a> Gamelayer</h2><p>First, create a <code>gamelayer</code> folder in the RP folder. Inside <code>gameplayer</code>, create a folder called <code>launcher</code>. Inside the <code>launcher</code> folder, create a file called <code>game_mode.json</code>.</p><p><img src="'+o+`" alt="game_mode"></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;game_modes&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;behavior_pack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;default_privacy&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;loading_tip_set&quot;</span><span class="token operator">:</span> <span class="token string">&quot;campaign&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_players&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myth&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;resource_pack&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;telemetry_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Myth_Mod_Template&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;ui_style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;lostLegend&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;myths_hub_host_list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;myth_test&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Replace the <code>...</code> in <code>behavior_pack</code> and <code>resource_pack</code> with the UUID in the header section of your <code>manifest.json</code>.</li><li>Replace the <code>...</code> in <code>name</code> with the mod id you defined in <code>dlc_metadata.json</code>.</li></ul><h2 id="game-rules" tabindex="-1"><a class="header-anchor" href="#game-rules" aria-hidden="true">#</a> Game Rules</h2><p>Now we need to define the game rules for the custom gamemode. Create <code>game_rules</code> folder and a <code>game_rules.json</code> in the folder.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;badger:template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;game_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;game_rules&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;defaults&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;autosaveenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;bsharpenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;campaignactsenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;creativemodedefault&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;devplaygroundenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;difficultymodeenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dodaylightcycle&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;dofogofwar&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;doplayersinvincible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;doweathercycle&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;enablecinematicdeaths&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;enableunlocks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;entitystreamingenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;exclusiveluredunits&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;generator_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flat&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;mapenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;onboardingenabledcampaign&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;onboardingenabledpvp&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;popcapenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;precachestructures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;randomstartingteam&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;saveonquitenabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;skip_lobby_creation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;teamcolors&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;use_flatlands_level_id&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;useactiontelemetry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;worldsizeaxischunks&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Replace the <code>...</code> with your mod id.</p><h2 id="player-spawn" tabindex="-1"><a class="header-anchor" href="#player-spawn" aria-hidden="true">#</a> Player Spawn</h2><p>The game now knows how to generate your mod, but it needs to know how to spawn the player. In your BP folder, create a <code>services</code> folder. In this folder create <code>player_spawn.json</code>.</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;badger:player_spawn_service&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;badger:template&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;game_mode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parent&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:player_spawn_service&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;default_mount_archetype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;badger:mount_horse&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;min_block_radius&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
        <span class="token property">&quot;pending_villages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;player_archetype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;minecraft:player&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;respawn_seconds&quot;</span><span class="token operator">:</span> <span class="token number">0.0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Replace the <code>...</code> with your mod id.</p><h2 id="checking-your-work" tabindex="-1"><a class="header-anchor" href="#checking-your-work" aria-hidden="true">#</a> Checking your Work</h2><p>If you have done everything correctly, when you play your mod, it should spawn you in a flat world with the horse mount!</p>`,17),l=[p];function c(r,u){return s(),a("div",null,l)}const d=n(t,[["render",c],["__file","game-config.html.vue"]]);export{d as default};
