# Verwende das .NET 8 SDK
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Abhängigkeiten wiederherstellen
COPY *.csproj ./
RUN dotnet restore

# App-Build
COPY . ./
RUN dotnet publish -c Release -o /out

# Runtime-Image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /out .

# Port freigeben
EXPOSE 8080

# Startbefehl
ENTRYPOINT ["dotnet", "ITBL.dll"]