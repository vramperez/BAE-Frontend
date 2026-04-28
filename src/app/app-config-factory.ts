import { MatomoInitializerService } from 'ngx-matomo-client';
import { AppInitService } from './services/app-init.service';
import { ThemeService } from './services/theme.service';
import { environment } from 'src/environments/environment';

export function appConfigFactory(
  appInitService: AppInitService,
  matomoInitializer: MatomoInitializerService,
  themeService: ThemeService
): () => Promise<any> {
  return () => {
    return appInitService.init().then(conf => {
      themeService.initializeProviderTheme(environment.providerThemeName);

      const matomoConfigOptions = {
        siteId: conf.matomoId,
        trackerUrl: conf.matomoUrl
      }
      matomoInitializer.initializeTracker(matomoConfigOptions)
    });
  }
}
