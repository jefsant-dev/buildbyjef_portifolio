**Deploy automático para Hostinger (SFTP/SSH)**

Este repositório contém um workflow de GitHub Actions que faz deploy automático ao dar push na branch `main`.

Arquivos criados:
- `.github/workflows/deploy.yml` — workflow que usa `appleboy/scp-action` para enviar arquivos ao servidor.

Secrets necessários (adicionar em Settings → Secrets do repositório):
- `HOSTINGER_HOST` — IP do servidor (ex: 89.117.7.130)
- `HOSTINGER_PORT` — porta SSH (ex: 65002)
- `HOSTINGER_USER` — usuário SSH (ex: u986889441)
- `HOSTINGER_SSH_KEY` — chave privada SSH (conteúdo do arquivo `~/.ssh/id_ed25519_hostinger`)
- `HOSTINGER_REMOTE_PATH` — caminho remoto onde os arquivos devem ir (ex: `/home/u986889441/domains/buildbyjef.site/public_html`)

Observações e passos sugeridos:
1. No seu ambiente local copie o conteúdo da chave privada que geramos:

```
cat ~/.ssh/id_ed25519_hostinger
```

Cole o conteúdo completo (com as linhas `-----BEGIN OPENSSH PRIVATE KEY-----` ... `-----END OPENSSH PRIVATE KEY-----`) como o secret `HOSTINGER_SSH_KEY`.

2. Configure os outros secrets com os valores fornecidos pela Hostinger.

3. Verifique e ajuste `HOSTINGER_REMOTE_PATH` para o diretório do domínio `buildbyjef.site`. Possíveis caminhos:
- `/home/u986889441/domains/buildbyjef.site/public_html`
- ou `/home/u986889441/public_html` (dependendo da configuração da hospedagem).

4. Após salvar os secrets, faça um push para `main` e o workflow executará automaticamente.

5. Se preferir usar FTP (user/senha) em vez de SSH, podemos trocar o workflow por uma ação de FTP; diga se quer essa alternativa.

Segurança: mantenha a chave privada secreta. Se preferir, crie uma chave nova somente para o GitHub Actions.
