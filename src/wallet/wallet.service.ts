import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class WalletService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createWalletDto: Prisma.WalletAddressCreateInput) {
    return this.databaseService.walletAddress.create({
      data: createWalletDto,
    });
  }

  async findAll() {
    return this.databaseService.walletAddress.findMany({});
  }

  async findOne(id: string) {
    return this.databaseService.walletAddress.findUnique({
      where: {
        wallet_id: id,
      },
    });
  }

  async update(id: string, updateWalletDto: Prisma.WalletAddressUpdateInput) {
    return this.databaseService.walletAddress.update({
      where: {
        wallet_id: id,
      },
      data: updateWalletDto,
    });
  }

  async remove(id: string) {
    return this.databaseService.walletAddress.delete({
      where: {
        wallet_id: id,
      },
    });
  }
}
